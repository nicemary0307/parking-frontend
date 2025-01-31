
import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-parking-search',
  templateUrl: './parking-search.component.html',
  styleUrls: ['./parking-search.component.scss']
})
export class ParkingSearchComponent implements OnInit {
  parkingSpots: any[] = [];

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingService.searchParkingSpots().subscribe(
      (data) => (this.parkingSpots = data),
      (error) => console.error('Error fetching parking spots', error)
    );
  }
}
