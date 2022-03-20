import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInventoryAvailabilityComponent } from './reg-inventory-availability.component';

describe('RegInventoryAvailabilityComponent', () => {
  let component: RegInventoryAvailabilityComponent;
  let fixture: ComponentFixture<RegInventoryAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInventoryAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInventoryAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
