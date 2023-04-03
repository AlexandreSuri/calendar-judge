package com.alexandre.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.alexandre.crudspring.model.Calendars;
import com.alexandre.crudspring.repository.CalendarRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CalendarRepository calendarRepository){
		return args -> {
			calendarRepository.deleteAll();

			Calendars c = new Calendars();
			c.setTitulo("Reunião");
			c.setJuiz("Pedro");
			c.setDia("2023-03-03");
			c.setInicio("10:00");
			c.setFim("11:00");
			c.setDescricao("Reunião referete ao acordo de sentença");

			calendarRepository.save(c);
		};
	}

}
