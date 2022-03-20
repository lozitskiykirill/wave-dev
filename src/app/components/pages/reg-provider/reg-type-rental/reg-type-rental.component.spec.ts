import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTypeRentalComponent } from './reg-type-rental.component';

describe('RegTypeRentalComponent', () => {
  let component: RegTypeRentalComponent;
  let fixture: ComponentFixture<RegTypeRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTypeRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTypeRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
