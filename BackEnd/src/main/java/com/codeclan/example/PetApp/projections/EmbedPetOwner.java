package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.PetOwner;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedPetOwner", types = PetOwner.class)
public interface EmbedPetOwner {

    long getId();
    String getName();
    List<Pet> getPets();
}
