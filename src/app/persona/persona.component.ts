import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public nombre : string = "Juan de Dios";
  public edad : number = 27;
  constructor() { }

  ngOnInit(): void {
  }

  public cambiarNombre() : void {
    this.nombre = "Juan de Dios Barajas Corona";
  }

  public cambiarEdad() : void {
    this.edad = 28;
  }

}
