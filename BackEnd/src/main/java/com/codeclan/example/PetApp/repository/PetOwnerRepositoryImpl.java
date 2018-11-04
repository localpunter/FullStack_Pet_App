package com.codeclan.example.PetApp.repository;

import com.codeclan.example.PetApp.models.PetOwner;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class PetOwnerRepositoryImpl implements PetOwnerRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<PetOwner> allPetOwners(){
        List<PetOwner> petOwners = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(PetOwner.class);
            petOwners = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }


        return petOwners;
    }
}
