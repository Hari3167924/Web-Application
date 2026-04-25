//package com.project.shopease.service;
//import com.project.shopease.entity.Order;
//import com.project.shopease.entity.OrderItem;
//
//import com.project.shopease.repository.OrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//@Service
//public class OrderService {
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    public Order saveOrder(Order order) {
//
//        if (order.getItems() != null) {
//            for (OrderItem item : order.getItems()) {
//                item.setOrder(order);
//            }
//        }
//
//        return orderRepository.save(order);
//    }
//}


package com.project.shopease.service;

import com.project.shopease.entity.Order;
import com.project.shopease.DTO.OrderRequest;
import com.project.shopease.DTO.OrderItemRequest;
import com.project.shopease.entity.*;
import com.project.shopease.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;;


    public List<Order> getAllOrders() {
        return   orderRepository.findAll()     ;
    }

//    public Order createOrder(OrderRequest request) {
//
//        // 🔹 FETCH USER FROM DB
//        User user = userRepository.findById(request.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        // 🔹 CREATE ORDER
//        Order order = new Order();
//        order.setUser(user);   // IMPORTANT
//
//        // set other fields
//        order.setTotalAmount(request.getTotalAmount());
//        order.setStatus("PLACED");
//
//        return orderRepository.save(order);
//    }

    public Order placeOrder(OrderRequest request) {

        Order order = new Order();

        // SET TOTAL
        order.setTotalAmount(request.getTotal());

        // SET STATUS
        order.setStatus("Pending");

        // SET USER
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        order.setUser(user);

        // SAVE ORDER FIRST
        Order savedOrder = orderRepository.save(order);

        // CREATE ITEMS LIST
        List<OrderItem> items = new ArrayList<>();

        for (OrderItemRequest itemReq : request.getItems()) {

            OrderItem item = new OrderItem();

            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            item.setProduct(product);
            item.setQuantity(itemReq.getQuantity());
            item.setOrder(savedOrder);  // ✅ Set the order reference

            items.add(item);
        }

        // SET ITEMS TO ORDER
        savedOrder.setItems(items);

        return orderRepository.save(savedOrder);
    }

}




//    public Order placeOrder(OrderRequest request) {
//
//        // 🔍 Fetch user
//        User user = userRepository.findById(request.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        Order order = new Order();
//        order.setUser(user);
//        order.setTotal(request.getTotal());
//        order.setOrderDate(LocalDateTime.now());
//
//        List<OrderItem> orderItems = new ArrayList<>();
//
//        for (OrderItemRequest itemReq : request.getItems()) {
//
//            Product product = productRepository.findById(itemReq.getProductId())
//                    .orElseThrow(() -> new RuntimeException("Product not found"));
//
//            OrderItem item = new OrderItem();
//            item.setProduct(product);
//            item.setQuantity(itemReq.getQuantity());
//            item.setOrder(order);
//
//            orderItems.add(item);
//        }
//
//        order.setItems(orderItems);
//
//        return orderRepository.save(order);
//    }
//}