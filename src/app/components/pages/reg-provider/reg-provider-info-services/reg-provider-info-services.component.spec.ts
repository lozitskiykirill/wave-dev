import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderInfoServicesComponent } from './reg-provider-info-services.component';

describe('RegProviderInfoServicesComponent', () => {
  let component: RegProviderInfoServicesComponent;
  let fixture: ComponentFixture<RegProviderInfoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderInfoServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderInfoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
