import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInventorySaleComponent } from './reg-inventory-sale.component';

describe('RegInventorySaleComponent', () => {
  let component: RegInventorySaleComponent;
  let fixture: ComponentFixture<RegInventorySaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInventorySaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInventorySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
