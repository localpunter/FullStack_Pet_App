package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.PetOwner;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedPet", types = Pet.class)
public interface EmbedPet {
    Long getId();
    String getName();
    String getType();
    PetOwner getPetOwner();



}
