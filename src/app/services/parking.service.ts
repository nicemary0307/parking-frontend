
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private apiUrl = 'http://localhost:5000/api/parking'; 

  constructor(private http: HttpClient) {}

  searchParkingSpots(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`);
  }
}
