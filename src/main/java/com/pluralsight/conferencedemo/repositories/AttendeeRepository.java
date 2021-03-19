package com.pluralsight.conferencedemo.repositories;

import com.pluralsight.conferencedemo.models.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Integer> {
}
