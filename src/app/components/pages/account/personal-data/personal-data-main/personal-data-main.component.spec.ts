import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataMainComponent } from './personal-data-main.component';

describe('PersonalDataMainComponent', () => {
  let component: PersonalDataMainComponent;
  let fixture: ComponentFixture<PersonalDataMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
