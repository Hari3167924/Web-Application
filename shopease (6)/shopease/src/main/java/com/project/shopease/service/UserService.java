//package com.project.shopease.service;
//
//import com.project.shopease.entity.User;
//import com.project.shopease.repository.UserRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class UserService {
//    private final UserRepository userRepo;
//
//    public UserService(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    public Optional<User> login(String username, String password) {
//        return userRepo.findByUsername(username)
//                .filter(u -> u.getPassword().equals(password));
//    }
//
//    public User register(User user) {
//        return userRepo.save(user);
//    }
//}

//
//package com.project.shopease.service;
//
//import com.project.shopease.entity.User;
//import com.project.shopease.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    public User login(String username, String password) {
//        Optional<User> userOptional = userRepository.findByUsername(username);
//
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//            // Add your password validation logic here
//            if (user.getPassword().equals(password)) {
//                return user;
//            }
//        }
//        return null; // or throw an exception
//    }
//
//    // Additional methods...
//}

package com.project.shopease.service;

import com.project.shopease.entity.User;
import com.project.shopease.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public Optional<User> login(String username, String password) {
        return userRepo.findByUsername(username)
                .filter(u -> u.getPassword().equals(password));
    }

    public User register(User user) {
        return userRepo.save(user);
    }
}
