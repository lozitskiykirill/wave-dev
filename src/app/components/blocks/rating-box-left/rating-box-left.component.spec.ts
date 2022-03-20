import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBoxLeftComponent } from './rating-box-left.component';

describe('RatingBoxLeftComponent', () => {
  let component: RatingBoxLeftComponent;
  let fixture: ComponentFixture<RatingBoxLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBoxLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBoxLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
