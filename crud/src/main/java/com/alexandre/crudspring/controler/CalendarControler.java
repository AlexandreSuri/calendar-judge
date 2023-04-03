package com.alexandre.crudspring.controler;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.crudspring.model.Calendars;
import com.alexandre.crudspring.repository.CalendarRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/calendar")
@AllArgsConstructor
public class ProductsControler {
    

    private final CalendarRepository calendarRepository;

    @GetMapping("/getCalendar")
    public @ResponseBody List<Calendars> getCalendars(){
        return calendarRepository.findAll();
    }

    @GetMapping("/getCalendarById/{id}")
    public ResponseEntity<Calendars> getCalendarById(@PathVariable Long id){
        return calendarRepository.findById(id)
        .map(records -> ResponseEntity.ok().body(records))
        .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/saveCalendar")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Calendars saveCalendars(@RequestBody Calendars calendar){
        return calendarRepository.save(calendar);
    }

    @PutMapping("/editCalendar/{id}")
    public ResponseEntity<Calendars> putCalendar(@PathVariable Long id, @RequestBody Calendars calendar){
        return calendarRepository.findById(id)
        .map(recordFound -> {
            recordFound.setTitulo(calendar.getTitulo());
            recordFound.setJuiz(calendar.getJuiz());
            recordFound.setDia(calendar.getDia());
            recordFound.setInicio(calendar.getInicio());
            recordFound.setFim(calendar.getFim());
            recordFound.setDescricao(calendar.getDescricao());

            Calendars updated = calendarRepository.save(recordFound);
            return ResponseEntity.ok().body(updated);
        } )
        .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/deleteCalendar/{id}")
    public ResponseEntity<Void> deleteCalendar(@PathVariable Long id ){
        return calendarRepository.findById(id)
        .map(recordFound -> {
            calendarRepository.deleteById(id);
            return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
        
    }

}