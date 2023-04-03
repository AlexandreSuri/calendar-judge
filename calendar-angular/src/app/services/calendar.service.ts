import { Injectable } from '@angular/core';
import { Calendar } from '../model/calendar';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  public API = "api/calendar";

  constructor(private httpClient: HttpClient) {}

  /*getCalendar
  * ENDPOINT: api/calendar/getCalendar
  * METHOD: GET
  * DETAILS: performs the listing of all items in the database
  */
  getCalendar(){
    return this.httpClient.get<Calendar[]>(`${this.API}/getCalendar`)
      .pipe(
        first(),
    );

  }

  /*saveCalendar
  * DETAILS: processing validation
  * PARAMS: update() | create()
  */
  saveCalendar(record: Partial <Calendar>){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  /*getCalendarById
  * ENDPOINT: api/calendar/getCalendarById/id
  * METHOD: GET
  * DETAILS: performs the search for items in the database with validation by id
  * PARAMS: url id
  */
  getCalendarById(id: string){
    return this.httpClient.get<Calendar>(`${this.API}/getCalendarById/${id}`);
  }

  /*creat
  * ENDPOINT: api/calendar/saveCalendar
  * METHOD: POST
  * DETAILS: performs the insertion of itens in the database
  * PARAMS: body requisition
  */
  private create(record: Partial<Calendar>){
    return this.httpClient.post<Calendar>(`${this.API}/saveCalendar`, record);
  }

  /*update
  * ENDPOINT: api/calendar/editCalendar/id
  * METHOD: PUT
  * DETAILS: performs the update of items in the database
  * PARAMS: body requisition and url id
  */
  private update(record: Partial<Calendar>){
    return this.httpClient.put<Calendar>(`${this.API}/editCalendar/${record.id}`, record);
  }

  /*deleteCalendar
  * ENDPOINT: api/calendar/deleteCalendar/id
  * METHOD: DELETE
  * DETAILS: performs the insertion of items in the database
  * PARAMS: url id
  */
  deleteProduct(id: string){
    return this.httpClient.delete(`${this.API}/deleteCalendar/${id}`);
  }

}
