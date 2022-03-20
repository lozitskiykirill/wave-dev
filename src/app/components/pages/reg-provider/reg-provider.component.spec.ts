import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderComponent } from './reg-provider.component';

describe('RegProviderComponent', () => {
  let component: RegProviderComponent;
  let fixture: ComponentFixture<RegProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
