import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInventoryCancellationComponent } from './reg-inventory-cancellation.component';

describe('RegInventoryCancellationComponent', () => {
  let component: RegInventoryCancellationComponent;
  let fixture: ComponentFixture<RegInventoryCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInventoryCancellationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInventoryCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
