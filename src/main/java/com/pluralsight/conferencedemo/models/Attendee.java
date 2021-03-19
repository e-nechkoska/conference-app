package com.pluralsight.conferencedemo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "attendees")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // TODO: what's used for?
public class Attendee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // TODO: generirat za tie sto nemaat id?
    private Integer attendee_id;

    private String first_name;
    private String last_name;
    private String title;
    private String company;
    private String email;
    private String phone_number;

    public Attendee() { }

    public Integer getAttendee_id() {
        return attendee_id;
    }

    public void setAttendee_id(Integer id) {
        this.attendee_id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }
}
