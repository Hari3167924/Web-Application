package com.example.demo.repository;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;
import com.example.demo.model.OrderItemView;
import com.example.demo.model.OrderView;

@Repository
public class OrderRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // =========================
    // CART TOTAL
    // =========================
    public double getCartTotal(int userId) {

        String sql =
            "SELECT COALESCE(SUM(p.price * c.quantity),0) " +
            "FROM cart c " +
            "JOIN products p ON c.product_id = p.id " +
            "WHERE c.user_id=?";

        return jdbcTemplate.queryForObject(sql, Double.class, userId);
    }

    // =========================
    // SAVE ORDER
    // =========================
    public int saveOrder(int userId, double total) {

        String sql =
            "INSERT INTO orders(user_id,total,status,order_date) " +
            "VALUES(?,?,?,CURRENT_TIMESTAMP)";

        jdbcTemplate.update(sql, userId, total, "PENDING");

        return jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);
    }

    // =========================
    // MOVE CART → ORDER ITEMS
    // =========================
    public void moveCartToOrderItems(int userId, int orderId) {

        String sql =
            "INSERT INTO order_items(order_id, product_id, product_name, quantity, price, subtotal) " +
            "SELECT ?, c.product_id, p.name, c.quantity, p.price, (c.quantity * p.price) " +
            "FROM cart c " +
            "JOIN products p ON c.product_id = p.id " +
            "WHERE c.user_id=?";

        jdbcTemplate.update(sql, orderId, userId);
    }

    // =========================
    // CLEAR CART
    // =========================
    public void clearCart(int userId) {

        String sql = "DELETE FROM cart WHERE user_id=?";

        jdbcTemplate.update(sql, userId);
    }

    // =========================
    // UPDATE STATUS (FIXED)
    // =========================
    public void updateStatus(int orderId, String status, String transactionId) {

        // ONLY update status (do NOT touch items column)
        String sql =
            "UPDATE orders SET status=? WHERE id=?";

        jdbcTemplate.update(sql, status, orderId);
    }

    // =========================
    // USER ORDERS (OLD FORMAT)
    // =========================
    public List<Order> getOrdersByUserId(int userId) {

        String sql =
            "SELECT * FROM orders WHERE user_id=? ORDER BY id DESC";

        return jdbcTemplate.query(sql, (ResultSet rs, int i) -> {

            Order o = new Order();

            int orderId = rs.getInt("id");

            o.setId(orderId);
            o.setUserId(rs.getInt("user_id"));
            o.setTotal(rs.getDouble("total"));
            o.setStatus(rs.getString("status"));
            o.setOrderDate(rs.getString("order_date"));

            String itemSql =
                "SELECT product_name, quantity FROM order_items WHERE order_id=?";

            List<String> items = jdbcTemplate.query(
                itemSql,
                (ResultSet r, int j) ->
                    r.getString("product_name") + " x " + r.getInt("quantity"),
                orderId
            );

            o.setItems(String.join(", ", items));

            return o;

        }, userId);
    }

    // =========================
    // ADMIN + USER VIEW (NEW)
    // =========================
    public List<OrderView> getAllOrdersWithItems() {

        String sql =
            "SELECT o.id, o.user_id, o.total, o.order_date, " +
            "oi.product_name, oi.quantity, oi.price " +
            "FROM orders o " +
            "JOIN order_items oi ON o.id = oi.order_id " +
            "ORDER BY o.id DESC";

        Map<Integer, OrderView> map = new LinkedHashMap<>();

        jdbcTemplate.query(sql, rs -> {

            int orderId = rs.getInt("id");

            OrderView order = map.get(orderId);

            if (order == null) {

                order = new OrderView();

                order.setOrderId(orderId);
                order.setUserId(rs.getInt("user_id"));
                order.setTotal(rs.getDouble("total"));
                order.setOrderDate(rs.getString("order_date"));
                order.setItems(new ArrayList<>());

                map.put(orderId, order);
            }

            OrderItemView item = new OrderItemView();

            item.setProductName(rs.getString("product_name"));
            item.setQuantity(rs.getInt("quantity"));
            item.setPrice(rs.getDouble("price"));

            order.getItems().add(item);
        });

        return new ArrayList<>(map.values());
    }
}