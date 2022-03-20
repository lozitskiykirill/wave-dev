import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLangListComponent } from './header-lang-list.component';

describe('HeaderLangListComponent', () => {
  let component: HeaderLangListComponent;
  let fixture: ComponentFixture<HeaderLangListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLangListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
