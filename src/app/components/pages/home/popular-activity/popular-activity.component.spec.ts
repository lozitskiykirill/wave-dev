import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularActivityComponent } from './popular-activity.component';

describe('PopularActivityComponent', () => {
  let component: PopularActivityComponent;
  let fixture: ComponentFixture<PopularActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
