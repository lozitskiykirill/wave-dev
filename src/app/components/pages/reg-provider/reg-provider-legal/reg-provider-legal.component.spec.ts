import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderLegalComponent } from './reg-provider-legal.component';

describe('RegProviderLegalComponent', () => {
  let component: RegProviderLegalComponent;
  let fixture: ComponentFixture<RegProviderLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
