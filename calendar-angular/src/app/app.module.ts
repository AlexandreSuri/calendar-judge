import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponentComponent } from './shared/menu-component/menu-component.component';
import { RegisterContainerComponent } from './register-container/register-container/register-container.component';
import { TitleComponentComponent } from './shared/title-component/title-component.component';
import { FormContainerComponent } from './register-container/form-container/form-container.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container/calendar-container.component';
import { EventComponentComponent } from './calendar-container/event-component/event-component.component';
import { EventHeaderComponent } from './calendar-container/event-header/event-header.component';
import { DataPipe } from './shared/pipes/data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    RegisterContainerComponent,
    TitleComponentComponent,
    FormContainerComponent,
    CalendarContainerComponent,
    EventComponentComponent,
    EventHeaderComponent,
    DataPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MenuComponentComponent,
    DataPipe
  ]
})
export class AppModule { }
