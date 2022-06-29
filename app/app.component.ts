import { Component } from '@angular/core';
//1.{Componenet}: Decorator
//Decorator is a function, using which we attach metadata to a class, method, accessor, property, or parameter.
//It will select app-root element.

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <!-- interpolation   -->
    {{title}}

    </div>
    <img [src]="logo">
    <!-- oneway data flow -> change in input field dont change initial value -->
    <!-- (input) listen to changes of input  -->
    <input [value]="inputVal" (blur)="handleBlur($event)" (input)="handleInput($event)" >
    <div>{{inputVal}}</div>
    <button  (click)="handleClick($event)">Reset</button>
    <!-- two way data binding -->
    <input type="text" [ngModel]="twdb" (ngModelChange)="handleChange($event)">
    <input type="text" [(ngModel)]="twdb">
    <div> {{twdb}} </div>
  `
})
export class AppComponent {

  title: string;
  twdb: string = 'two way data binding example';
  inputVal: string =  'puskal';
  logo: string = 'img/logo.svg'
  constructor(){
    this.title = "Puskal is learning Anuglar."
  }

  handleBlur(event:any){
    this.inputVal = event.target.value;
  }

  handleInput(event:any){
    this.inputVal = event.target.value;
  }
  handleClick(event:any){
    this.inputVal = 'puskal';
  }
  handleChange(value:any){
    this.twdb = value;
  }

}
