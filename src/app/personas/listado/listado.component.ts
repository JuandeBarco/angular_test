import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas : string[] = ["Juan", "Pedro", "Maria", "Luis", "Ana"];
  persona_eliminada : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(persona: string){
    this.personas = this.personas.filter(personaEliminar => personaEliminar != persona);
    this.persona_eliminada = persona;
  }

}
