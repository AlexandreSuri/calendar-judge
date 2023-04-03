import { CalendarService } from './../services/calendar.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Calendar } from '../model/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarResolver implements Resolve<Calendar> {

  constructor(private service: CalendarService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Calendar> {
    if(route.params && route.params['id']){
      return this.service.getCalendarById(route.params['id']);
    }
    return of({
      id: '',
      titulo: '',
      juiz: '',
      dia: '',
      inicio: '',
      fim: '',
      descricao : ''
    });
  }
}
