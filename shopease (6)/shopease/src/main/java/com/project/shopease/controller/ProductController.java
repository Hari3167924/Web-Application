
//
//package com.project.shopease.controller;
//
//import com.project.shopease.entity.Product;
//import com.project.shopease.service.ProductService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/products")
////@CrossOrigin(origins = "http://localhost:3000")
//public class ProductController {
//    private final ProductService productService;
//    public ProductController(ProductService productService) { this.productService = productService; }
//
//    @GetMapping
//    public List<Product> getAllProducts() {
//        return productService.getAll();
//    }
//
//    @PostMapping
//    public Product addProduct(@RequestBody Product product) {
//        return productService.save(product);
//    }
////}
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
//@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
//public class OrderController {
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    // Get all orders
//    @GetMapping
//    public List<Order> getAllOrders() {
//        return orderRepository.findAll();
//    }
//
//    // Create new order
//    @PostMapping
//    public Order createOrder(@RequestBody Order order) {
//        return orderRepository.save(order);
//    }
//}

//
//package com.project.shopease.controller;
//
//import com.project.shopease.entity.Product;
//import com.project.shopease.service.ProductService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/products")
////@CrossOrigin(origins = "http://localhost:3000")
//public class ProductController {
//    private final ProductService productService;
//    public ProductController(ProductService productService) { this.productService = productService; }
//
//    @GetMapping
//    public List<Product> getAllProducts() {
//        return productService.getAll();
//    }
//
//    @PostMapping
//    public Product addProduct(@RequestBody Product product) {
//        return productService.save(product);
//    }
//}

//
//package com.project.shopease.controller;
//
//import com.project.shopease.entity.Product;
//import com.project.shopease.repository.ProductRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/products")
//@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
//public class ProductController {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    // ✅ Get all products
//    @GetMapping
//    public List<Product> getAllProducts() {
//        return productRepository.findAll();
//    }
//
//    // ✅ Add a single product
//    @PostMapping
//    public Product createProduct(@RequestBody Product product) {
//        return productRepository.save(product);
//    }
//
//    // ✅ Bulk insert products
//    @PostMapping("/bulk")
//    public List<Product> createProducts(@RequestBody List<Product> products) {
//        return productRepository.saveAll(products);
//    }
//
//    // ✅ Delete product by ID
//    @DeleteMapping("/{id}")
//    public void deleteProduct(@PathVariable Long id) {
//        productRepository.deleteById(id);
//    }
//}

//
//package com.project.shopease.controller;
//
//import com.project.shopease.entity.Product;
//import com.project.shopease.repository.ProductRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//@RestController
//@RequestMapping("/api/products")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ProductController {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    // Get all products
//    @GetMapping
//    public List<Product> getAllProducts() {
//        return productRepository.findAll();
//    }
//
//    // Get products by category
//    @GetMapping("/category/{category}")
//    public List<Product> getProductsByCategory(@PathVariable String category) {
//        return productRepository.findByCategory(category);
//    }
//
//    // Add single product
//    @PostMapping
//    public Product createProduct(@RequestBody Product product) {
//        return productRepository.save(product);
//    }
//
//    // Bulk insert
//    @PostMapping("/bulk")
//    public List<Product> createProducts(@RequestBody List<Product> products) {
//        return productRepository.saveAll(products);
//    }
//}


package com.project.shopease.controller;

import com.project.shopease.entity.Product;
import com.project.shopease.repository.ProductRepository;
import com.project.shopease.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")   // ✅ ADD THIS
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    @PostMapping("/bulk")
    public ResponseEntity<?> saveBulk(@RequestBody List<Product> products) {
        return ResponseEntity.ok(productService.saveAll(products));
    }
    @GetMapping
    public List<Product> getAllProducts() {
        System.out.println("API HIT"); // ✅ DEBUG LINE
        return productRepository.findAll();
    }
}






//@RestController
//@RequestMapping("/api/products")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ProductController {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    // Get all products
//    @GetMapping
//    public List<Product> getAllProducts() {
//        return productRepository.findAll();
//    }
//
//    // Get products by category
//    @GetMapping("/category/{category}")
//    public List<Product> getProductsByCategory(@PathVariable String category) {
//        return productRepository.findByCategory(category); // ✅ works now
//    }
//
//    // Add single product
//    @PostMapping
//    public Product createProduct(@RequestBody Product product) {
//        return productRepository.save(product);
//    }
//
//    // Bulk insert
//    @PostMapping("/bulk")
//    public List<Product> createProducts(@RequestBody List<Product> products) {
//        return productRepository.saveAll(products);
//    }
//}