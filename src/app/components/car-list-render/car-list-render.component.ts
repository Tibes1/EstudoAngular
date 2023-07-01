import { Component } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarListService } from 'src/app/services/car-list.service';

@Component({
  selector: 'app-car-list-render',
  templateUrl: './car-list-render.component.html',
  styleUrls: ['./car-list-render.component.css']
})
export class CarListRenderComponent {
  cars: Car[] = []

  constructor(private carListService: CarListService) {
    this.getCars()
  }

  getCars(): void {
    this.carListService.getAll().subscribe((cars) => (this.cars = cars))
  }

}
