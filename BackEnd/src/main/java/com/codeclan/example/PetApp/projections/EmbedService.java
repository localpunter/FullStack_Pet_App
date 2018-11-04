package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Business;
import com.codeclan.example.PetApp.models.Service;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedPetOwner", types = Service.class)
public interface EmbedService {

    Long getId();
    String getType();
    Business getBusiness();


}
