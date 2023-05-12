import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name:string = 'Tibes'
  age:number = 22
  hobbies:string[] = ['comer','correr','jogar']

  constructor() {}

  ngOnInit():void {

  }
}
