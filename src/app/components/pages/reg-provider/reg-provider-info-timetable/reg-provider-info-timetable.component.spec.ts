import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderInfoTimetableComponent } from './reg-provider-info-timetable.component';

describe('RegProviderInfoTimetableComponent', () => {
  let component: RegProviderInfoTimetableComponent;
  let fixture: ComponentFixture<RegProviderInfoTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderInfoTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderInfoTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
