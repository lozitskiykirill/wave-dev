import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateListItemComponent } from './date-list-item.component';

describe('DateListItemComponent', () => {
  let component: DateListItemComponent;
  let fixture: ComponentFixture<DateListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
