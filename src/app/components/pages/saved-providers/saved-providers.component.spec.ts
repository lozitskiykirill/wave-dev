import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedProvidersComponent } from './saved-providers.component';

describe('SavedProvidersComponent', () => {
  let component: SavedProvidersComponent;
  let fixture: ComponentFixture<SavedProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
