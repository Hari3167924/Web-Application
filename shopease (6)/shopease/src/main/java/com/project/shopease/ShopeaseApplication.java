package com.project.shopease;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync   // ✅ ADD HERE
@SpringBootApplication
public class ShopeaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopeaseApplication.class, args);
    }
}


//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
//
//@SpringBootApplication
//public class ShopeaseApplication {
//    public static void main(String[] args) {
//        SpringApplication.run(ShopeaseApplication.class, args);
//    }
//}


