import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInventoryTypeComponent } from './reg-inventory-type.component';

describe('RegInventoryTypeComponent', () => {
  let component: RegInventoryTypeComponent;
  let fixture: ComponentFixture<RegInventoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInventoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInventoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
