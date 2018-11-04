package com.codeclan.example.PetApp.controllers;


import com.codeclan.example.PetApp.repository.PetOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/petowners")
public class PetOwnerController {

    @Autowired
    PetOwnerRepository petOwnerRepository;
}
