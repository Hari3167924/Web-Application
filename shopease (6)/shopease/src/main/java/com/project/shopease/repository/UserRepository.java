//package com.project.shopease.repository;
//
//import com.project.shopease.entity.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.Optional;
//
//public interface UserRepository extends JpaRepository<User, Long> {
//    Optional<User> findByUsername(String username);
//}

//
//package com.project.shopease.repository;
//
//import com.project.shopease.entity.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//import java.util.Optional;
//
//@Repository
//public interface UserRepository extends JpaRepository<User, Long> {
//
//    // Add this method to fix the error
//    Optional<User> findByUsername(String username);
//
//    // You might also want these common methods:
//    Optional<User> findByEmail(String email);
//    Boolean existsByUsername(String username);
//    Boolean existsByEmail(String email);
//}


package com.project.shopease.repository;

import com.project.shopease.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
