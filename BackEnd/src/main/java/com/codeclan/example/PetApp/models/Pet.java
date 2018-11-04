package com.codeclan.example.PetApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pets")
public class Pet {
    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "petowner_id", nullable = false)
    private PetOwner petowner;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @JsonIgnore
    @OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Pet(){
    }

    public Pet(String name, String type, PetOwner petOwner){
        this.name = name;
        this.type = type;
        this.petowner = petOwner;
        this.bookings = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public PetOwner getPetOwner() {
        return petowner;
    }

    public void setPetOwner(PetOwner petOwner) {
        this.petowner = petOwner;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public PetOwner getPetowner() {
        return petowner;
    }

    public void setPetowner(PetOwner petowner) {
        this.petowner = petowner;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}