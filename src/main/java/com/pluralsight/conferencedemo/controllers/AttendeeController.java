package com.pluralsight.conferencedemo.controllers;

import com.pluralsight.conferencedemo.models.Attendee;
import com.pluralsight.conferencedemo.repositories.AttendeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/attendees")
public class AttendeeController {
    @Autowired
    private AttendeeRepository attendeeRepository;

    @GetMapping
    public List<Attendee> list() {
        return attendeeRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Attendee get(@PathVariable Integer id) {
        return attendeeRepository.getOne(id);
    }

    @PostMapping
    public Attendee create(@RequestBody Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Attendee update(@PathVariable Integer id, @RequestBody Attendee attendee) {
        Attendee foundAttendee = attendeeRepository.getOne(id);
        BeanUtils.copyProperties(attendee, foundAttendee, "attendee_id");
        return attendeeRepository.saveAndFlush(foundAttendee);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Integer id) {
        attendeeRepository.deleteById(id);
    }
}
