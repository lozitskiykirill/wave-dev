import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInventoryAddComponent } from './reg-inventory-add.component';

describe('RegInventoryAddComponent', () => {
  let component: RegInventoryAddComponent;
  let fixture: ComponentFixture<RegInventoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInventoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInventoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
