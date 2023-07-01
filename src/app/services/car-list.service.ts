import { Injectable } from '@angular/core';

import { Car } from '../Car';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  private apiUrl = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
  }
}
