import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = false;
  color: string = 'blue'

  constructor() {}

  ngOnInit(): void{}

  showMessage(): void{
    this.show = !this.show
  }

  setColorBlue(): void{
    this.color = 'blue'
  }

  setColorRed(): void{
    this.color = 'red'
  }
}
