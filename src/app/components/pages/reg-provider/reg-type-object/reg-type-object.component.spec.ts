import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTypeObjectComponent } from './reg-type-object.component';

describe('RegTypeObjectComponent', () => {
  let component: RegTypeObjectComponent;
  let fixture: ComponentFixture<RegTypeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTypeObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTypeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
