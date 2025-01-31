

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = 'http://localhost:5000/api/parking'; 

  constructor(private http: HttpClient) {}

  parkVehicle(vehicleData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/park`, vehicleData);
  }
}
