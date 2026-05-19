package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    //
    // ADD TO CART
    //
    @PostMapping("/add")
    public String addToCart(@RequestBody Cart cartRequest) {

        try {

            //
            // FIND PRODUCT
            //
            Product product =
                    productRepository.findById(
                            cartRequest.getProductId())
                    .orElse(null);

            if(product == null){
                return "Product not found";
            }

            //
            // SAVE CART
            //
            Cart cart = new Cart();

            cart.setUserId(cartRequest.getUserId());

            cart.setProductId(product.getId());

            cart.setName(product.getName());

            cart.setPrice(product.getPrice());

            cart.setImage(product.getImage());

            cart.setQuantity(cartRequest.getQuantity());

            cartRepository.save(cart);

            return "Product added to cart";

        } catch(Exception e){

            e.printStackTrace();

            return "Error : " + e.getMessage();
        }
    }

    //
    // GET MY CART
    //
    @GetMapping("/mycart/{userId}")
    public List<Cart> getMyCart(@PathVariable int userId){

        return cartRepository.findByUserId(userId);
    }

    //
    // DELETE CART ITEM
    //
    @DeleteMapping("/delete/{id}")
    public String deleteCart(@PathVariable int id){

        cartRepository.deleteById(id);

        return "Item removed";
    }
    //
    // UPDATE QUANTITY
    //
    @PutMapping("/update/{id}/{qty}")
    public String updateQuantity(@PathVariable int id,
                                @PathVariable int qty){

        Cart cart = cartRepository.findById(id).orElse(null);

        if(cart == null){
            return "Cart item not found";
        }

        cart.setQuantity(qty);

        cartRepository.save(cart);

        return "Quantity updated";
    }

}