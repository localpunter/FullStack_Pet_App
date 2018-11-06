package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.Owner;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedOwner", types = Owner.class)
public interface EmbedOwner {

    Long getId();
    String getName();
    List<Pet> getPets();
}
