package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Business;
import com.codeclan.example.PetApp.projections.EmbedBusiness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


@RepositoryRestResource(excerptProjection = EmbedBusiness.class)
public interface BusinessRepository extends JpaRepository<Business, Long>, BusinessRepositoryCustom {
}
