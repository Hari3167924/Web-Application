//package com.project.shopease.service;
//
//import com.project.shopease.entity.Product;
//import com.project.shopease.repository.ProductRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class ProductService {
//    private final ProductRepository productRepo;
//
//    public ProductService(ProductRepository productRepo) {
//        this.productRepo = productRepo;
//    }
//
//    public List<Product> getAll() {
//        return productRepo.findAll();
//    }
//
//    public Product save(Product product) {
//        return productRepo.save(product);
//    }
//}


package com.project.shopease.service;

import com.project.shopease.entity.Product;
import com.project.shopease.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> saveAll(List<Product> products) {
        return productRepository.saveAll(products);
    }
}





//@Service
//public class ProductService {
//    private final ProductRepository productRepo;
//
//    public ProductService(ProductRepository productRepo) {
//        this.productRepo = productRepo;
//    }
//
//    public List<Product> getAll() {
//        return productRepo.findAll();
//    }
//
//    public Product save(Product product) {
//        return productRepo.save(product);
//    }
//}
