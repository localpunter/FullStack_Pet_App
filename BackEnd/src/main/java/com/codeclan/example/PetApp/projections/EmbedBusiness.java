package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Business;
import com.codeclan.example.PetApp.models.Service;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedBusiness", types = Business.class)
public interface EmbedBusiness {

    long getId();
    String getName();
    List<Service> getServiceList();
}
