import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderInfoDescriptionComponent } from './reg-provider-info-description.component';

describe('RegProviderInfoDescriptionComponent', () => {
  let component: RegProviderInfoDescriptionComponent;
  let fixture: ComponentFixture<RegProviderInfoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderInfoDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderInfoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
