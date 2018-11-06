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
    @JoinColumn(name = "pet_owner_id", nullable = false)
    private PetOwner petOwner;

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
        this.petOwner = petOwner;
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
        return petOwner;
    }

    public void setPetOwner(PetOwner petOwner) {
        this.petOwner = petOwner;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public void addBooking(Booking booking) {
        this.bookings.add(booking);
    }
}