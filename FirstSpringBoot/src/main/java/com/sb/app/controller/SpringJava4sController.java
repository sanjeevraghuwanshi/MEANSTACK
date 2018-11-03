package com.sb.app.controller;

import com.sb.app.repository.SpringJava4sDAO;
import com.sb.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpringJava4sController {

    @Autowired
    private SpringJava4sDAO dao;

    @RequestMapping("/")
    public String welcome(){
        return "Welcome to Spring boot tutorials";
    }

    @RequestMapping("/hello")
    public String hello(){
        return "Hello Spring boot";
    }

    @RequestMapping("/getcustInfo")
    public List<Customer> customerInfo(){
        List<Customer> list = dao.isData();
        return  list;
    }

    @RequestMapping("/userlogin")
    public String userValidating(){
        return "User successfully logged in";
    }

    @RequestMapping("/adminlogin")
    public String adminValidating(){
        return "Admin successfully logged in";
    }

    @RequestMapping("/login")
    public String login(){
        return "User: successfully logged in";
    }
    @RequestMapping("/admin")
    public String admin(){
        return "Admin: successfully logged in";
    }

    @RequestMapping("/save-cust-info")
    public String customerInfo(@RequestBody Customer customer){
        return "Customer info saved sucessfully in db";
    }
}
