import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInventoryPriceComponent } from './reg-inventory-price.component';

describe('RegInventoryPriceComponent', () => {
  let component: RegInventoryPriceComponent;
  let fixture: ComponentFixture<RegInventoryPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInventoryPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInventoryPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
