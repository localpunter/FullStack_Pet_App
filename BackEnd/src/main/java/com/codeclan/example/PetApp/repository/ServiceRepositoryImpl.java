package com.codeclan.example.PetApp.repository;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class ServiceRepositoryImpl implements ServiceRepositoryCustom {

    @Autowired
    EntityManager entityManager;
}
