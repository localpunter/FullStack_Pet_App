package com.codeclan.example.PetApp.components;

import com.codeclan.example.PetApp.models.Business;
import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.PetOwner;
import com.codeclan.example.PetApp.models.Service;
import com.codeclan.example.PetApp.repository.BusinessRepository;
import com.codeclan.example.PetApp.repository.PetOwnerRepository;
import com.codeclan.example.PetApp.repository.PetRepository;
import com.codeclan.example.PetApp.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PetRepository petRepository;

    @Autowired
    PetOwnerRepository petOwnerRepository;

    @Autowired
    BusinessRepository businessRepository;

    @Autowired
    ServiceRepository serviceRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        PetOwner petOwner1 = new PetOwner("Han Solo");
        petOwnerRepository.save(petOwner1);

//        PetOwner petOwner2 = new PetOwner("Vito Corleone");
//        petOwnerRepository.save(petOwner2);

        Pet pet1 = new Pet("Chewbacca", "Dog", petOwner1);
        petRepository.save(pet1);
        petOwner1.addPet(pet1);
        petOwnerRepository.save(petOwner1);

        Pet pet2 = new Pet("Luke", "Cat", petOwner1);
        petRepository.save(pet2);
        petOwner1.addPet(pet2);
        petOwnerRepository.save(petOwner1);

        Business business1 = new Business("Animals world");
        businessRepository.save(business1);

        Service service1 = new Service("veterinary", business1);
        serviceRepository.save(service1);
        business1.addService(service1);

        Service service2 = new Service("pet psychiatry", business1);
        serviceRepository.save(service2);
        business1.addService(service2);

        businessRepository.save(business1);




    }
}
