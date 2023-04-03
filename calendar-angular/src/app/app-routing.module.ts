import { CalendarResolver } from './guards/calendar.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarContainerComponent } from './calendar-container/calendar-container/calendar-container.component';
import { RegisterContainerComponent } from './register-container/register-container/register-container.component';


const routes: Routes = [
  {path: '', component: CalendarContainerComponent},
  {path: 'Cadastro', component: RegisterContainerComponent, resolve: {calendar: CalendarResolver}},
  {path: 'Editar/:id', component: RegisterContainerComponent, resolve: {calendar: CalendarResolver}},
  {path: 'Agendamento', component: CalendarContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
