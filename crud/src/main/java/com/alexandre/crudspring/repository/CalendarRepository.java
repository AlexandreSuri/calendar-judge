package com.alexandre.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alexandre.crudspring.model.Calendars;

@Repository
public interface CalendarRepository extends JpaRepository<Calendars, Long> {


    
}
