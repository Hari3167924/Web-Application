//package com.project.shopease.config;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.*;
//
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry){
//        registry.addMapping("/api/**")
//                .allowedOrigins("http://localhost:3000")
//                .allowedMethods("*")
//                .allowCredentials(true);
//    }
////}

package com.project.shopease.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}
//package com.project.shopease.config;
//
//import com.project.shopease.model.Product;
//import com.project.shopease.repository.ProductRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class DataInitializer {
//
//    @Bean
//    public CommandLineRunner initData(ProductRepository productRepository) {
//        return args -> {
//            // Clear existing data (optional)
//            productRepository.deleteAll();
//
//            // Add your sample products
//            productRepository.save(new Product("Laptop", 20000.0, "electronics", "/computer-laptop.jpg"));
//            productRepository.save(new Product("Smartphone", 5000.0, "electronics", "/Mobile-phone.webp"));
//            productRepository.save(new Product("T-Shirt", 500.0, "fashion", "/T-shirt-image.png"));
//            productRepository.save(new Product("Jeans Pant", 1000.0, "fashion", "/jeans-pant-image.webp"));
//            productRepository.save(new Product("French Apples", 120.0, "produce", "/download-apples-png-image-red-apple-fruit-10.png"));
//
//            System.out.println("Sample data initialized successfully!");
//        };
//    }
//}