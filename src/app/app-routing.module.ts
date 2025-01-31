
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSearchComponent } from './components/parking-search/parking-search.component';
import { ParkVehicleComponent } from './components/park-vehicle/park-vehicle.component';

const routes: Routes = [
  { path: 'search', component: ParkingSearchComponent },
  { path: 'park', component: ParkVehicleComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
