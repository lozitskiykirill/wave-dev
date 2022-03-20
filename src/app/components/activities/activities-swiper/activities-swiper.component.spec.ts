import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSwiperComponent } from './activities-swiper.component';

describe('ActivitiesSwiperComponent', () => {
  let component: ActivitiesSwiperComponent;
  let fixture: ComponentFixture<ActivitiesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
