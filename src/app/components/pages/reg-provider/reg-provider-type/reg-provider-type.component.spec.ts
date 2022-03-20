import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderTypeComponent } from './reg-provider-type.component';

describe('RegProviderTypeComponent', () => {
  let component: RegProviderTypeComponent;
  let fixture: ComponentFixture<RegProviderTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
