package com.codeclan.example.PetApp.components;

import com.codeclan.example.PetApp.models.*;
import com.codeclan.example.PetApp.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PetRepository petRepository;

    @Autowired
    OwnerRepository ownerRepository;

    @Autowired
    BusinessRepository businessRepository;

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Owner owner1 = new Owner("Han Solo");
        ownerRepository.save(owner1);

//        Owner owner2 = new Owner("Vito Corleone");
//        ownerRepository.save(owner2);

        Pet pet1 = new Pet("Chewbacca", "Dog", owner1);
        petRepository.save(pet1);
        owner1.addPet(pet1);
        ownerRepository.save(owner1);

        Pet pet2 = new Pet("Luke", "Cat", owner1);
        petRepository.save(pet2);
        owner1.addPet(pet2);
        ownerRepository.save(owner1);

        Business business1 = new Business("Animals world");
        businessRepository.save(business1);

        Service service1 = new Service("veterinary", business1);
        serviceRepository.save(service1);
        business1.addService(service1);

        Service service2 = new Service("pet psychiatry", business1);
        serviceRepository.save(service2);
        business1.addService(service2);

        businessRepository.save(business1);

        Booking booking1 = new Booking("04/10/2018", pet1, service1);
        bookingRepository.save(booking1);
        service1.addBooking(booking1);
        pet1.addBooking(booking1);

        bookingRepository.save(booking1);





    }
}
