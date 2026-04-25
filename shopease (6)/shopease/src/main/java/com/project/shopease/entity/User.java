//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//import java.util.List;
//
//@Data
//@Entity
//@Table(name = "users")
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(unique = true, nullable = false)
//    private String username;
//
//    private String password;
//
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private List<Order> orders;
//}
//
//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Table(name = "users")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(unique = true, nullable = false)
//    private String username;
//
//    @Column(nullable = false)
//    private String password;
//
//    @Column(unique = true)
//    private String email;
//
//    private String firstName;
//    private String lastName;
//
//    // Other fields and methods...
//}
//
//package com.project.shopease.entity;
//
//import jakarta.persistence.*;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import lombok.Data;
//import java.util.List;
//
//@Data
//@Entity
//@Table(name = "users")
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(unique = true, nullable = false)
//    private String username;
//
//    private String password;
//
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private List<Order> orders;
//}

//
//
package com.project.shopease.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;



@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(unique = true)
    private String email;

    private String firstName;
    private String lastName;
}
//@Entity
//@Table(name = "users")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;  // Changed from "blight" to Long
//
//    @Column(unique = true, nullable = false)
//    private String username;
//
//    @Column(nullable = false)
//    private String password;
//
//    @Column(unique = true)
//    private String email;
//
//
//    private String firstName;
//    private String lastName;
//
//    // If you have relationships, make sure they match
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//
//    // Other relationships...
//}
//
//package com.project.shopease.entity;
//import jakarta.persistence.*;
//@Entity
//@Table(name = "users")
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String username;   // 👈 add this
//    private String email;
//    private int age;
//
//    // getters & setters
//}
//
