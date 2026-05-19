package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // REGISTER
    public String register(User u) {
        if (repo.findByUsername(u.getUsername()) != null) {
            return "Username already exists";
        }
        repo.save(u);
        return "User registered successfully";
    }

    // LOGIN
    public String login(User u) {
        User user = repo.findByUsername(u.getUsername());

        if (user != null && user.getPassword().equals(u.getPassword())) {
            return "User login success";
        }
        return "Invalid username or password";
    }
}