import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
        <h1>{{ title }}</h1>
        <div class="row justify-content-center mt-5">
            <h1 class="display-1">{{numero}}</h1>
        </div>
        <div class="row justify-content-center mt-5">
            <button type="button" class="btn btn-danger" (click)="contador(-base)">-{{ base }}</button>
            <button type="button" class="btn btn-primary ml-3" (click)="contador(base)">+{{ base }}</button>
        </div>
    `
})

export class ContadorComponent {
    public title: string = 'angular_test';
    public numero: number = 0;
    public base: number = 5;

    public contador(value: number): void {
        this.numero+=value;
    }
}