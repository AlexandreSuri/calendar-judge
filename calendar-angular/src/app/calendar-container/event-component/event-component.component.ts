import { CalendarService } from './../../services/calendar.service';
import { catchError, Observable, of } from 'rxjs';
import { Calendar } from './../../model/calendar';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent {

  calendars$: Observable<Calendar[]> | null = null;
  @Input() calendar: Calendar[] = [];

  constructor(
    private calendarService: CalendarService,
    private router: Router) {

    this.refresh();
  }

  refresh(){
    this.calendars$ = this.calendarService.getCalendar().pipe(
      catchError(
        error => {
          return of([]);
        })
    );
  }

  onEdit(calendar: Calendar){
    this.router.navigate(['Editar', calendar.id]);
  }

  onRemove(calendar: Calendar){
    if(confirm("Deseja realmente remover ese agendamento?") == true){
      this.confirmRemove(calendar);
    }
  }

  confirmRemove(calendar: Calendar){
    this.calendarService.deleteProduct(calendar.id).subscribe({
      next: () => {
        this.refresh();
        alert("Removido com sucesso !");
      }
    });
  }

}
