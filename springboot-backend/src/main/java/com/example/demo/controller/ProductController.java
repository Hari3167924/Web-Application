package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository repo;

    // ADD PRODUCT WITH IMAGE

    @PostMapping("/add")
    public String addProduct(

            @RequestParam("name") String name,

            @RequestParam("price") double price,

            @RequestParam("category") String category,

            @RequestParam("stock") int stock,

            @RequestParam("image") MultipartFile image

    ) {

        try {

            // CREATE UPLOAD FOLDER

            String uploadDir = "uploads/";

            File dir = new File(uploadDir);

            if (!dir.exists()) {
                dir.mkdirs();
            }

            // SAVE IMAGE

            String fileName = image.getOriginalFilename();

            Files.copy(
                    image.getInputStream(),
                    Paths.get(uploadDir + fileName),
                    StandardCopyOption.REPLACE_EXISTING
            );

            // SAVE PRODUCT

            Product product = new Product();

            product.setName(name);
            product.setPrice(price);
            product.setCategory(category);
            product.setStock(stock);
            product.setImage(fileName);

            repo.save(product);

            return "Product Added Successfully";

        } catch (IOException e) {

            e.printStackTrace();

            return "Image Upload Failed";
        }
    }

    // VIEW PRODUCTS

    @GetMapping("/all")
    public java.util.List<Product> getAllProducts() {

        return repo.findAll();
    }
}