//package com.project.shopease.repository;
//
//import com.project.shopease.entity.CartItem;
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.List;
//
//public interface CartRepository extends JpaRepository<CartItem, Long> {
//
//    List<CartItem> findByUserId(Long userId);
//}
//package com.project.shopease.repository;
//
//import com.project.shopease.entity.CartItem;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.List;
//
//@Autowired
//private CartItemRepository cartRepo;
//
//public interface CartItemRepository extends JpaRepository<CartItem, Long> {
//
//    List<CartItem> findByUserId(Long userId);
//}

package com.project.shopease.repository;

import com.project.shopease.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUserId(Long userId);
}