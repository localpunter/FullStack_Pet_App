package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.Pet;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class PetRepositoryImpl implements PetRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Pet> allPets(){
        List<Pet> pets = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Pet.class);
            pets = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }


        return pets;
    }
}