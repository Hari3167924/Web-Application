package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController

@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {

        Map<String, String> response = new HashMap<>();

        User existing = repo.findByEmail(user.getEmail());

        if(existing != null) {
            response.put("message", "Email already exists");
            return response;
        }

        repo.save(user);

        response.put("message", "Registration Successful");

        return response;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {

        Map<String, String> response = new HashMap<>();

        User existing = repo.findByEmail(user.getEmail());

        if(existing == null) {
            response.put("message", "User not found");
        }
        else if(existing.getPassword().equals(user.getPassword())) {
            response.put("message", "Login Successful");
        }
        else {
            response.put("message", "Invalid Password");
        }

        return response;
    }
}
