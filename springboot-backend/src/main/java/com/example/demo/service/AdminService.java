package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository repo;

    public String login(Admin a) {

        try {

            Admin admin = repo.findByUsernameAndPassword(
                a.getUsername(),
                a.getPassword()
            );

            if(admin != null) {

                return "Admin login success";

            } else {

                return "Wrong username or password";
            }

        } catch(Exception e) {

            e.printStackTrace();

            return "Server Error";
        }
    }
}