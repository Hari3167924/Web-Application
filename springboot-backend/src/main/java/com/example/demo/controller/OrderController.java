package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Order;
import com.example.demo.model.OrderItemView;
import com.example.demo.model.OrderView;
import com.example.demo.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // =========================
    // CHECKOUT
    // =========================
    @RequestMapping(value = "/checkout/{userId}", method = {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<String> checkout(@PathVariable int userId) {

        double total = orderRepository.getCartTotal(userId);

        if (total <= 0) {
            return ResponseEntity.badRequest().body("Cart is empty");
        }

        int orderId = orderRepository.saveOrder(userId, total);

        orderRepository.moveCartToOrderItems(userId, orderId);

        return ResponseEntity.ok(String.valueOf(orderId));
    }

    // =========================
    // USER ORDERS (OLD FORMAT)
    // =========================
    @GetMapping("/user/{userId}")
    public List<Order> getUserOrders(@PathVariable int userId) {
        return orderRepository.getOrdersByUserId(userId);
    }

    // =========================
    // PAYMENT UPDATE
    // =========================
    @PutMapping("/status/{orderId}")
    public ResponseEntity<String> updateStatus(
            @PathVariable int orderId,
            @RequestParam String status,
            @RequestParam int userId
    ) {

        orderRepository.updateStatus(orderId, status, null);

        if (status.equalsIgnoreCase("PAID")) {
            orderRepository.clearCart(userId);
        }

        return ResponseEntity.ok("SUCCESS");
    }

    // =========================
    // ADMIN + USER VIEW (NEW STRUCTURE)
    // =========================
    @GetMapping("/view/all")
    public List<OrderView> viewAllOrders() {
        return orderRepository.getAllOrdersWithItems();
    }

    @GetMapping("/view/user/{userId}")
    public List<OrderView> viewUserOrders(@PathVariable int userId) {

        return orderRepository.getAllOrdersWithItems()
                .stream()
                .filter(o -> o.getUserId() == userId)
                .collect(Collectors.toList());
    }
    @GetMapping("/export/csv")
    public ResponseEntity<String> exportCSV() {

        List<OrderView> orders = orderRepository.getAllOrdersWithItems();

        StringBuilder csv = new StringBuilder();

        csv.append("Order ID,User ID,Product,Qty,Price,Total,Date\n");

        for (OrderView o : orders) {

            for (OrderItemView item : o.getItems()) {

                csv.append(o.getOrderId()).append(",")
                .append(o.getUserId()).append(",")
                .append(item.getProductName()).append(",")
                .append(item.getQuantity()).append(",")
                .append(item.getPrice()).append(",")
                .append(o.getTotal()).append(",")
                .append(o.getOrderDate())
                .append("\n");
            }
        }

        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=orders_report.csv")
                .body(csv.toString());
    }
}