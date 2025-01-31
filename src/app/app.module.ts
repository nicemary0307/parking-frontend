
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingSearchComponent } from './components/parking-search/parking-search.component';
import { ParkVehicleComponent } from './components/park-vehicle/park-vehicle.component';

@NgModule({
  declarations: [AppComponent, ParkingSearchComponent, ParkVehicleComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

