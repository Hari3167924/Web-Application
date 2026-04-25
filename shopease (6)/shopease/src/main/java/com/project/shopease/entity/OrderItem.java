package com.project.shopease.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 🔗 संबंध with Order
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;


    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonBackReference
    private Order order;

    // 🔗 (THIS WAS MISSING ❗)
//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore
    private Product product;

    private int quantity;

    // ================= GETTERS & SETTERS =================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {   // ✅ THIS FIXES YOUR ERROR
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}




















//package com.project.shopease.entity;
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//import jakarta.persistence.*;
//
//
//
//@Entity
//public class OrderItem {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private int quantity;
//    private double price;
//
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;
//
//    private Long productId;
//
//    public void setOrder(Order order) {
//    }
//}
//@Entity
//@Getter
//@Setter
//public class OrderItem {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private int quantity;     // ✅ quantity belongs here
//    private Double price;
//
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;
//
//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;
//}




//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;
//
//    // ✅ ONLY ONE quantity field
//    private int quantity;
//
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;
//
//    // ✅ default constructor
//    public OrderItem() {}
//
//    // optional constructor
//    public OrderItem(Product product) {
//        this.product = product;
//    }
//
//    // getters & setters
//}

//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//@Data
//@Entity
//public class OrderItem {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private Long productId;
//    private int quantity;
//    private double price;
//
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;
//
//    // getters & setters
//}




//@Entity
//@Table(name = "order_items")
//public class OrderItem {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private Double price;
//
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;
//}
