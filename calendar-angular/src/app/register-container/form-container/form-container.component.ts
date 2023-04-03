import { CalendarService } from './../../services/calendar.service';
import { Calendar } from './../../model/calendar';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent {

  options: any[] = [
    {data: "V.Ex. José", value: "José"},
    {data: "V.Ex. Pedro", value: "Pedro"},
    {data: "V.Ex. Paulo", value: "Paulo"},
    {data: "V.Ex. João", value: "João"},
  ];

  form = this.formBuilder.group({
    id: [''],
    titulo: [''],
    juiz: [''],
    dia: [''],
    inicio: [''],
    fim: [''],
    descricao: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
              private service: CalendarService,
              private location: Location,
              private route: ActivatedRoute){}

  ngOnInit(): void {

    const calendar: Calendar = this.route.snapshot.data['calendar'];
    this.form.setValue({
      id: calendar.id,
      titulo: calendar.titulo,
      juiz: calendar.juiz,
      dia: calendar.dia,
      inicio: calendar.inicio,
      fim: calendar.fim,
      descricao: calendar.descricao

    });
  }

  onSubmit(){
    this.service.saveCalendar(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  onSuccess(){
    alert("Salvo com sucesso !");
    this.onCancel();
  }

  onError(){
    alert("Algo deu errado !");
  }

}
