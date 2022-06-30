import { Component } from '@angular/core';
//1.{Componenet}: Decorator
//Decorator is a function, using which we attach metadata to a class, method, accessor, property, or parameter.
//It will select app-root element.
interface Passengers {
  id: number,
  name: string,
  checkedin: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  title: string;
  twdb: string = 'two way data binding example';
  inputVal: string = 'puskal';
  logo: string = 'img/logo.svg'
  constructor() {
    this.title = "Puskal is learning Anuglar."
  }

  passengers: Passengers[] = [
    {
      id: 1,
      name: "Puskal1 Kafle",
      checkedin: true
    },
    {
      id: 2,
      name: "Puskal2 Kafle",
      checkedin: true
    }
  ]

  // handleBlur(event:any){
  //   this.inputVal = event.target.value;
  // }

  handleInput(event: any) {
    this.inputVal = event.target.value;
  }
  handleClick(event: any) {
    this.inputVal = 'puskal';
  }
  handleChange(value: any) {
    this.twdb = value;
  }
}
