import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingActivityComponent } from './upcoming-activity.component';

describe('UpcomingActivityComponent', () => {
  let component: UpcomingActivityComponent;
  let fixture: ComponentFixture<UpcomingActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
