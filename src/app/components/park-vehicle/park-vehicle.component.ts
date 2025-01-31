
import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-park-vehicle',
  templateUrl: './park-vehicle.component.html',
  styleUrls: ['./park-vehicle.component.scss'],
})
export class ParkVehicleComponent {
  vehicleNumber = '';
  userId = '';
  parkingSpotId = '';

  constructor(private vehicleService: VehicleService) {}

  parkVehicle(): void {
    const vehicleData = {
      vehicleNumber: this.vehicleNumber,
      userId: this.userId,
      parkingSpotId: this.parkingSpotId,
    };

    this.vehicleService.parkVehicle(vehicleData).subscribe(
      (response) => alert('Vehicle parked successfully'),
      (error) => alert('Error parking vehicle')
    );
  }
}
