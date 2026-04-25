//package com.project.shopease.repository;
//
//import com.project.shopease.entity.Order;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface OrderRepository extends JpaRepository<Order, Long> {
//}

package com.project.shopease.repository;

import com.project.shopease.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUser_Username(String username);
    // Get all orders by user
//    List<Order> findByUserId(Long userId);

}

