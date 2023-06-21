import { Component } from '@angular/core';

import {Animal} from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "dog", age: 5},
    {name: "Tom", type: "cat", age: 8},
    {name: "Frida", type: "dog", age: 3},
    {name: "Bob", type: "horse", age: 12},
  ]

  animalDetails: string = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

}
