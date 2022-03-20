import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderSuccessComponent } from './reg-provider-success.component';

describe('RegProviderSuccessComponent', () => {
  let component: RegProviderSuccessComponent;
  let fixture: ComponentFixture<RegProviderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
