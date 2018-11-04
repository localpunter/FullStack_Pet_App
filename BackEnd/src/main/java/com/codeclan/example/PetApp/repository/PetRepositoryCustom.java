package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Pet;

import java.util.List;

public interface PetRepositoryCustom {
    List<Pet> allPets();
}