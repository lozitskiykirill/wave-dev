import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRateActivitiesComponent } from './top-rate-activities.component';

describe('TopRateActivitiesComponent', () => {
  let component: TopRateActivitiesComponent;
  let fixture: ComponentFixture<TopRateActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRateActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRateActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
