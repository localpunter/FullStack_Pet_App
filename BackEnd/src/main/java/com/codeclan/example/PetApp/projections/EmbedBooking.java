package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Booking;
import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.Service;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedBooking", types = Booking.class)
public interface EmbedBooking {
    Long getId();
    Pet getPet();
    Service getService();
    String getDate();



}
