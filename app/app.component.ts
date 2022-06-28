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
    <input [value]="inputVal">
    <div>{{inputVal}}</div>
  `
})
export class AppComponent {

  title: string;
  inputVal: string =  'puskal';
  logo: string = 'img/logo.svg'
  constructor(){
    this.title = "Puskal is learning Anuglar."
  }

}
