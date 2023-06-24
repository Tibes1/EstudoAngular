import { Component } from '@angular/core';

import {Animal} from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = []

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  animalDetails: string = ''
  lastAnimalName: string = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
    this.lastAnimalName = animal.name;
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal')
    if (animal.name == this.lastAnimalName) {
      this.animalDetails = ''
    }
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals))
  }
}
