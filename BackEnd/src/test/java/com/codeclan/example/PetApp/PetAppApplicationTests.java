package com.codeclan.example.PetApp;

import com.codeclan.example.PetApp.models.Business;
import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.PetOwner;
import com.codeclan.example.PetApp.models.Service;
import com.codeclan.example.PetApp.repository.BusinessRepository;
import com.codeclan.example.PetApp.repository.PetOwnerRepository;
import com.codeclan.example.PetApp.repository.PetRepository;
import com.codeclan.example.PetApp.repository.ServiceRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.lang.invoke.SerializedLambda;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PetAppApplicationTests {

	@Autowired
	PetRepository petRepository;

	@Autowired
	PetOwnerRepository petOwnerRepository;

	@Autowired
	BusinessRepository businessRepository;

    @Autowired
    ServiceRepository serviceRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canSavePetOwner() {
		PetOwner petOwner = new PetOwner("Andrew");
		petOwnerRepository.save(petOwner);
		Pet pet = new Pet("Fido", "Dog", petOwner);
		petRepository.save(pet);
		petOwner.addPet(pet);
		petOwnerRepository.save(petOwner);
	}

	@Test
	public void canSaveBusiness() {
		Business business = new Business("Filip's Vet");
		businessRepository.save(business);

	}

	@Test
    public void canAddServicesToBusiness() {
        Business business = new Business("Animals world");
        businessRepository.save(business);
        Service service1 = new Service("veterinary", business);
        Service service2 = new Service("pet psychiatry", business);
        serviceRepository.save(service1);
        serviceRepository.save(service2);
        business.addService(service1);
        business.addService(service2);
        businessRepository.save(business);


    }

}
