import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProviderPhotoComponent } from './reg-provider-photo.component';

describe('RegProviderPhotoComponent', () => {
  let component: RegProviderPhotoComponent;
  let fixture: ComponentFixture<RegProviderPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProviderPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProviderPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
