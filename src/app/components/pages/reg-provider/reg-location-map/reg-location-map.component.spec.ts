import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLocationMapComponent } from './reg-location-map.component';

describe('RegLocationMapComponent', () => {
  let component: RegLocationMapComponent;
  let fixture: ComponentFixture<RegLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegLocationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
