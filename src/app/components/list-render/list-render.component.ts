import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Turca", type: "dog"},
    {name: "Tom", type: "cat"},
    {name: "Frida", type: "dog"},
    {name: "Bob", type: "horse"},
  ]
}
