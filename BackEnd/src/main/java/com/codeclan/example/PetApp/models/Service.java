package com.codeclan.example.PetApp.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @OneToMany(mappedBy = "service", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    @Column(name = "type")
    private String type;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "business_id", nullable = false)
    Business business;

    public Service(String type, Business business) {
        this.type = type;
        this.business = business;
        this.bookings = new ArrayList<>();
    }

    public Service() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
