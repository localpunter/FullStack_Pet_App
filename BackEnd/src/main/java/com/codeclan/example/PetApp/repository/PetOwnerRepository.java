package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.PetOwner;
import com.codeclan.example.PetApp.projections.EmbedPetOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedPetOwner.class)
public interface PetOwnerRepository extends JpaRepository<PetOwner, Long>, PetOwnerRepositoryCustom {
}
