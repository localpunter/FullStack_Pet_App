package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Service;
import com.codeclan.example.PetApp.projections.EmbedService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedService.class)

public interface ServiceRepository extends JpaRepository<Service, Long>, ServiceRepositoryCustom {
}
