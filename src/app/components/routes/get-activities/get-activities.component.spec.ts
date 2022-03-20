import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetActivitiesComponent } from './get-activities.component';

describe('GetActivitiesComponent', () => {
  let component: GetActivitiesComponent;
  let fixture: ComponentFixture<GetActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
