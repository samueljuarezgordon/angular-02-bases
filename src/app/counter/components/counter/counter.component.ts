// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3> Counter: {{counter}} </h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter += value;
  }

  // decreaseBy():void {
  //   this.counter -= 1;
  // }

  resetCounter(){
    this.counter = 10;
  }
}
