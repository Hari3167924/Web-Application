package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@RestController

@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private UserRepository repo;

    // REGISTER
    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody User u) {

        Map<String, Object> res = new HashMap<>();
        res.put("message", service.register(u));
        return res;
    }

    // LOGIN
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User u) {

        Map<String, Object> res = new HashMap<>();

        User user = repo.findByUsername(u.getUsername());

        if (user != null &&
            user.getPassword().equals(u.getPassword())) {

            res.put("message", "Login success");
            res.put("userId", user.getId());
            res.put("username", user.getUsername());
            res.put("fullname", user.getFullname());

        } else {

            res.put("message", "Invalid username or password");
        }

        return res;
    }

    // PROFILE
    @GetMapping("/profile")
    public Map<String, Object> profile(HttpSession session) {

        Map<String, Object> res = new HashMap<>();

        // FIX: read as String safely
        String userIdStr = (String) session.getAttribute("userId");

        if (userIdStr == null) {
            res.put("error", "Not logged in");
            return res;
        }

        int userId = Integer.parseInt(userIdStr);

        User user = repo.findById(userId).orElse(null);

        if (user == null) {
            res.put("error", "User not found");
            return res;
        }

        res.put("userId", user.getId());
        res.put("username", user.getUsername());
        res.put("fullname", user.getFullname());
        res.put("email", user.getEmail());

        return res;
    }

    // LOGOUT
    @GetMapping("/logout")
    public Map<String, Object> logout(HttpSession session) {

        session.invalidate();

        Map<String, Object> res = new HashMap<>();
        res.put("message", "Logout success");

        return res;
    }

    // ALL USERS
    @GetMapping("/all")
    public List<User> getUsers() {
        return repo.findAll();
    }
}