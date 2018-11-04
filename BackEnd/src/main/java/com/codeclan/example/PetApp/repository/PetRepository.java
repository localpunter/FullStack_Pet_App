package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.projections.EmbedPet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedPet.class)
public interface PetRepository extends JpaRepository<Pet, Long>, PetRepositoryCustom {

}
