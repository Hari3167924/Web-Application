package com.project.shopease.controller;

import com.project.shopease.DTO.UserRequest;
import com.project.shopease.DTO.UserResponse;
import com.project.shopease.entity.User;
import com.project.shopease.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserRequest userRequest) {
        Optional<User> existingUser = userRepository.findByUsername(userRequest.getUsername());

        if (existingUser.isPresent() && existingUser.get().getPassword().equals(userRequest.getPassword())) {
            UserResponse userResponse = new UserResponse();
            userResponse.setId(existingUser.get().getId());
            userResponse.setUsername(existingUser.get().getUsername());
            return ResponseEntity.ok(userResponse);
        } else {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }
    }
}
