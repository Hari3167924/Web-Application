package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Product;

@Repository
public class ProductRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // SAVE PRODUCT
    public int save(Product product) {

        String sql = "INSERT INTO products(name, price, stock) VALUES(?,?,?)";

        return jdbcTemplate.update(
                sql,
                product.getName(),
                product.getPrice(),
                product.getStock()
        );
    }

    // GET ALL PRODUCTS
    public List<Product> findAll() {

        String sql = "SELECT * FROM products";

        return jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Product.class)
        );
    }

    // FIND PRODUCT BY ID
    public Optional<Product> findById(int id) {

        String sql = "SELECT * FROM products WHERE id=?";

        List<Product> products = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Product.class),
                id
        );

        if (products.isEmpty()) {
            return Optional.empty();
        }

        return Optional.of(products.get(0));
    }

    // REDUCE STOCK
    public void reduceStock(int productId, int qty) {

        String sql = "UPDATE products SET stock = stock - ? WHERE id = ?";

        jdbcTemplate.update(sql, qty, productId);
    }

    // GET STOCK
    public int getStock(int productId) {

        String sql = "SELECT stock FROM products WHERE id=?";

        Integer stock = jdbcTemplate.queryForObject(
                sql,
                Integer.class,
                productId
        );

        return stock != null ? stock : 0;
    }
}