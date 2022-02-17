import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'angular_test';
  public numero: number = 0;
  public base: number = 5;

  public contador(value: number): void {
    this.numero+=value;
  }
}
