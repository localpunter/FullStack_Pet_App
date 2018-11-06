package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Owner;
import com.codeclan.example.PetApp.projections.EmbedOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedOwner.class)
public interface OwnerRepository extends JpaRepository<Owner, Long>, OwnerRepositoryCustom {
}
