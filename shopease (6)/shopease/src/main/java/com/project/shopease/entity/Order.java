//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Data
//@Entity
//@Table(name = "orders")
//public class Order {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private LocalDateTime orderDate;
//    private Double total;
//    private String payment;
//    private String status;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private List<OrderItem> items;
//}
//
//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//
//import javax.net.ssl.SSLSession;
//import java.util.List;
//
//import java.time.LocalDateTime;
//
//@Setter
//@Getter
//@Entity
//@Table(name = "orders")
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String username;
//    private Double total;
//    private String date;
//
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private List<OrderItem> items;
//
//    public void setUser(User user) {
//    }
//
//    public void setQuantity(int quantity) {
//    }
//
//    public SSLSession getUser() {
//    }
//}



//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String status;
//
//    private LocalDateTime createdAt;
//
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private List<OrderItem> items;
//    private User user;
//    private Product product;
//    private int quantity;
//
//    // getters & setters
//}




//@Entity
//@Table(name = "orders")
//public class Order {
//
//    // ✅ Getters & Setters
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    // ✅ Many orders can belong to one user
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    // ✅ Many orders can have one product
//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;
//
//    private int quantity;
//
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    // ✅ Constructors
//    public Order() {}
//
//    public Order(User user, Product product, int quantity) {
//        this.user = user;
//        this.product = product;
//        this.quantity = quantity;
//    }

//}

package com.project.shopease.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders") // ✅ avoid reserved keyword
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double totalAmount;
    private String status;

    // ✅ ADD USER RELATIONSHIP
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

//    // ✅ ITEMS
//    @OneToMany(mappedBy = "order",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    private List<OrderItem> items;

    @OneToMany(mappedBy = "order",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    
    private List<OrderItem> items;

    // ✅ GETTERS & SETTERS

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }

    public void setTotal(Object total) {
    }
}

//@Entity
//@Table(name = "orders")
//@Getter
//@Setter
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String username;
//
//    private Double total;
//
//    private Integer quantity;
//
//    private LocalDateTime date = LocalDateTime.now();
//}

//    @ManyToOne
//    private Product product;
//
//@Getter
//@Setter
//@Entity
//@Table(name = "orders")
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private Double total;
//    private String date;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;   // ✅ REQUIRED
//
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private List<OrderItem> items;
//}


//
//@Getter
//@Setter
//@Entity
//@Table(name = "orders")
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String username;
//    private Double total;
//    private String date;
//
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private List<OrderItem> items;
//
//    public void setUser(User user) {
//    }
//
//    public void setQuantity(int quantity) {
//    }
//
//    public SSLSession getUser() {
//    }
//}