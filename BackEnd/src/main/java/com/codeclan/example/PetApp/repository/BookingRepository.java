package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Booking;
import com.codeclan.example.PetApp.projections.EmbedBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


@RepositoryRestResource(excerptProjection = EmbedBooking.class)
public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
}

