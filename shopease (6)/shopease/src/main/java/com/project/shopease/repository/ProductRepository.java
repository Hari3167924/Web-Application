//package com.project.shopease.repository;
//
//import com.project.shopease.entity.Product;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface ProductRepository extends JpaRepository<Product, Long> {
//}

//package com.project.shopease.repository;
//
//import com.project.shopease.entity.Product;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface ProductRepository extends JpaRepository<Product, Long> {
//}

//package com.project.shopease.repository;
//
//import com.project.shopease.entity.Product;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//import java.util.List;
//
//@Repository
//public interface ProductRepository extends JpaRepository<Product, Long> {
//    List<Product> findByType(String type);
////    List<Product> findByCategory(String category);
//}

package com.project.shopease.repository;

import com.project.shopease.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

//    List<Product> findByCategory(String category); // ✅ REQUIRED
}
