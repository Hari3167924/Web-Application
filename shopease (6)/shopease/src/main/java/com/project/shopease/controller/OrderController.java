//package com.project.shopease.controller;
//
//import com.project.shopease.entity.Order;
//import com.project.shopease.entity.OrderItem;
//import com.project.shopease.service.OrderService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin(origins = "*")
//public class OrderController {
//    private final OrderService orderService;
//    public OrderController(OrderService orderService) { this.orderService = orderService; }
//
//    @PostMapping("/{userId}/checkout")
//    public ResponseEntity<Order> checkout(@PathVariable Long userId, @RequestBody List<OrderItem> items) {
//        return ResponseEntity.ok(orderService.createOrder(userId, items));
//    }
//
//    @GetMapping("/{userId}")
//    public List<Order> getOrders(@PathVariable Long userId) {
//        return orderService.getOrdersByUser(userId);
//    }
//}

//
//package com.project.shopease.controller;
//
//import com.project.shopease.entity.Order;
//import com.project.shopease.repository.OrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin(origins = "http://localhost:3000")
//public class OrderController {
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    // ✅ Place an order
//    @PostMapping
//    public Order placeOrder(@RequestBody Order order) {
//        return orderRepository.save(order);
//    }
//
//    // ✅ Get all orders
//    @GetMapping
//    public List<Order> getAllOrders() {
//        return orderRepository.findAll();
//    }
//
//    // ✅ Get orders for a specific user
//    @GetMapping("/user/{userId}")
//    public List<Order> getOrdersByUser(@PathVariable Long userId) {
//        return orderRepository.findAll().stream()
//                .filter(order -> order.getUser().getId()   // ✅ access the user ID through the User entity
//                        .equals(userId))
//                .toList();
//    }
//}
//package com.project.shopease.controller;
//
//import com.project.shopease.entity.*;
//import com.project.shopease.DTO.OrderRequest;
//import com.project.shopease.repository.CartRepository;
//import com.project.shopease.repository.OrderRepository;
//import com.project.shopease.repository.UserRepository;
//import com.project.shopease.repository.ProductRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.LocalDateTime;
//import java.util.List;
//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin("*")
//public class OrderController {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    @Autowired
//    private UserRepository userRepository;
////    @Autowired
////    private OrderRepository orderRepo;
////
////    @Autowired
////    private ProductRepository productRepo; // ✅ THIS WAS MISSING
//
//
//    @PostMapping("/place")
//    public ResponseEntity<String> placeOrder(@RequestBody OrderRequest request) {
//
//        System.out.println("Order API called");
//
//        User user = userRepository.findById(request.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        List<CartItem> cartItems = cartRepository.findByUserId(request.getUserId());
//
//        if (cartItems.isEmpty()) {
//            return ResponseEntity.badRequest().body("Cart is empty");
//        }
//
//        double total = 0;
//
//        for (CartItem item : cartItems) {
//            total += item.getProduct().getPrice() * item.getQuantity();
//        }
//
//        Order order = new Order();
//        order.setUsername(user.getUsername());
//        order.setTotal(total);
//        order.setQuantity(cartItems.size());
//
//        orderRepository.save(order);
//
//        cartRepository.deleteAll(cartItems);
//
//        return ResponseEntity.ok("Order placed successfully");
//    }
//}





//    @PostMapping("/place")
//    public String placeOrder(@RequestBody OrderRequest request) {
//
//        User user = userRepository.findById(request.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        List<CartItem> cartItems = cartRepo.findByUserId(request.getUserId());
//
//        double total = 0;
//
//        for (CartItem item : cartItems) {
//            total += item.getProduct().getPrice() * item.getQuantity();
//        }
//
//        Order order = new Order();
//        order.setUsername(user.getUsername());
//        order.setTotal(total);
//        order.setQuantity(cartItems.size());
//
//        orderRepository.save(order);
//
//        // OPTIONAL: clear cart
//        cartRepo.deleteAll(cartItems);
//
//        return "Order placed successfully";
//    }
//}


//
//    @PostMapping("/place")
//    public ResponseEntity<?> placeOrder(@RequestBody OrderRequest request) {
//
//        User user = userRepository.findById(request.getUserId()).get();
//        List<CartItem> cartItems = cartRepo.findByUser(user);
//
//        for (CartItem item : cartItems) {
//
//            Order order = new Order();
//            order.setProduct(item.getProduct());
//            order.setQuantity(item.getQuantity());
//            order.setUsername(request.getUsername());
//            order.setTotal(item.getProduct().getPrice() * item.getQuantity());
//            order.setDate(String.valueOf(LocalDateTime.now()));
//
//            orderRepository.save(order);
//        }
//
//        cartRepo.deleteAll(cartItems);
//
//        return ResponseEntity.ok("Order placed successfully");
//    }
//}


//    @PostMapping
//    public Order placeOrder(@RequestBody OrderRequest orderRequest) {
//
//        Product product = productRepository.findById(orderRequest.getProductId())
//                .orElseThrow(() -> new RuntimeException("Product not found"));
//
//        Order order = new Order();
//        order.setUsername(orderRequest.getUsername());
//        order.setQuantity(orderRequest.getQuantity());
//        order.setProduct(product);
//
//        double total = product.getPrice() * orderRequest.getQuantity();
//        order.setTotal(total);
//
//        order.setDate(java.time.LocalDate.now().toString());
//
//        return orderRepository.save(order);
//    }
//}






    // ✅ Place an order
//    @PostMapping
//    public Order placeOrder(@RequestBody OrderRequest orderRequest) {
//
//        User user = userRepository.findById(orderRequest.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        Product product = productRepository.findById(orderRequest.getProductId())
//                .orElseThrow(() -> new RuntimeException("Product not found"));
//
//        Order order = new Order();
//        order.setUser(user);
//
//        OrderItem item = new OrderItem();
//        item.setProduct(product);
//        item.setQuantity(orderRequest.getQuantity());
//        item.setPrice(product.getPrice());
//        item.setOrder(order);
//
//        order.setItems(List.of(item));
//
//        // Calculate total
//        order.setTotal(product.getPrice() * orderRequest.getQuantity());
//
//        return orderRepository.save(order);
//    }
//}

//
//package com.project.shopease.controller;
//
//import com.project.shopease.DTO.OrderRequest;
//import com.project.shopease.entity.CartItem;
//import com.project.shopease.entity.Order;
//import com.project.shopease.entity.User;
//import com.project.shopease.repository.CartRepository;
//import com.project.shopease.repository.OrderRepository;
//import com.project.shopease.repository.UserRepository;
//import com.project.shopease.service.OrderService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.LocalDateTime;
//import java.util.List;
//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin(origins = "http://localhost:3000")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    @PostMapping
//    public Order placeOrder(@RequestBody Order order) {
//        return orderService.saveOrder(order);
//    }
//}
//



//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin("*")
//public class OrderController {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @PostMapping("/place")
//    public ResponseEntity<String> placeOrder(@RequestBody OrderRequest request) {
//
//        User user = userRepository.findById(request.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        List<CartItem> cartItems = cartRepository.findByUserId(request.getUserId());
//
//        if (cartItems == null || cartItems.isEmpty()) {
//            return ResponseEntity.badRequest().body("Cart is empty");
//        }
//
//        double total = 0;
//
//        Order order = new Order();
//        order.setUsername(user.getUsername());
//        order.setDate(java.time.LocalDateTime.now().toString());
//        order.setQuantity(cartItems.size());
//
//        orderRepository.save(order); // SAVE FIRST
//
//        for (CartItem item : cartItems) {
//            total += item.getProduct().getPrice() * item.getQuantity();
//        }
//
//        order.setTotal(total);
//
//        orderRepository.save(order); // UPDATE WITH TOTAL
//
//        cartRepository.deleteAll(cartItems);
//
//        return ResponseEntity.ok("Order placed successfully");
//    }
//}


//
//package com.project.shopease.controller;
//
//import com.project.shopease.DTO.OrderRequest;
//import com.project.shopease.entity.Order;
//import com.project.shopease.service.OrderService;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/orders")
//@CrossOrigin(origins = "*")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//
//    @PostMapping
//    public ResponseEntity<?> createOrder(@RequestBody OrderRequest request) {
//        return ResponseEntity.ok(orderService.placeOrder(request));
//    }
//
//    @GetMapping
//    public ResponseEntity<?> getAllOrders() {
//        try {
//            return  ResponseEntity.ok( orderService.getAllOrders());
//        }
//        catch (Exception e){
//            return ResponseEntity
//                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(e.getMessage());
//        }
//    }
//}




//    @PostMapping
//    public ResponseEntity<?> placeOrder(@RequestBody OrderRequest request) {
//        return ResponseEntity.ok(orderService.placeOrder(request));
//    }

//    @PostMapping
//    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequest request) {
//        Order savedOrder = orderService.placeOrder(request);
//        return ResponseEntity.ok(savedOrder);
//    }







package com.project.shopease.controller;

import com.project.shopease.DTO.OrderRequest;
import com.project.shopease.entity.Order;
import com.project.shopease.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest request) {
        return ResponseEntity.ok(orderService.placeOrder(request));
    }

    @GetMapping
    public List<Order> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();;
        return orders;
    }
}