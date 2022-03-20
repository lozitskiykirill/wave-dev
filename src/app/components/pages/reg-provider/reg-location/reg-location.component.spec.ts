import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLocationComponent } from './reg-location.component';

describe('RegLocationComponent', () => {
  let component: RegLocationComponent;
  let fixture: ComponentFixture<RegLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
