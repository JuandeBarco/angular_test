import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { PersonaComponent } from './persona/persona.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    PersonaComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
