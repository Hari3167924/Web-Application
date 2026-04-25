//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//@Data
//@Entity
//@Table(name = "products")
//public class Product {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private Double price;
//    private String category;
//    private String image;
//}
//
//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//@Data
//@Entity
//@Table(name = "products")
//public class Product {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private Double price;
//    private String category;
//    private String image;
//}
//
//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "products")
//public class Product {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private double price;
//    private String image;
//
//    // ✅ Getters and Setters
//    public Long getId() { return id; }
//    public void setId(Long id) { this.id = id; }
//
//    public String getName() { return name; }
//    public void setName(String name) { this.name = name; }
//
//    public double getPrice() { return price; }
//    public void setPrice(double price) { this.price = price; }
//
//    public String getImage() { return image; }
//    public void setImage(String image) { this.image = image; }
//}


//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//@Entity
//@Getter
//@Setter
//public class Product {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private Double price;
//
//    private String category; // ✅ ADD THIS
//}




//    // Getters and Setters
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private double price;
//    private String image;
//
//    private String category; // NEW: "Grocery", "Fashion", "Electronics"
//
//}



package com.project.shopease.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;

    private String category;
}




//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private double price;
//    private String image;
//    private String category;
//    private Product product;
//}




//
//@Getter
//@Setter
//@Entity
//public class Product {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private Double price;
//    private String image;
//    private String category;
//
//    public Product() {} // ✅ MUST
//
//    @JsonIgnore   // ✅ ADD THIS
//    @OneToMany(mappedBy = "product")
//    private List<Order> orders;
//}








//@Entity
//public class Product {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private Double price;
//    private String image;
//
//    private String category; // ✅ REQUIRED
//
//    public Product(Long id, String name, Double price, String image, String category) {
//        this.id = id;
//        this.name = name;
//        this.price = price;
//        this.image = image;
//        this.category = category;
//    }
//}