import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTypeAddressComponent } from './reg-type-address.component';

describe('RegTypeAddressComponent', () => {
  let component: RegTypeAddressComponent;
  let fixture: ComponentFixture<RegTypeAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTypeAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTypeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
