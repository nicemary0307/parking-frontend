import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkVehicleComponent } from './park-vehicle.component';

describe('ParkVehicleComponent', () => {
  let component: ParkVehicleComponent;
  let fixture: ComponentFixture<ParkVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkVehicleComponent]
    });
    fixture = TestBed.createComponent(ParkVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
