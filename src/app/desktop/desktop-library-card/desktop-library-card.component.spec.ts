import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLibraryCardComponent } from './desktop-library-card.component';

describe('DesktopLibraryCardComponent', () => {
  let component: DesktopLibraryCardComponent;
  let fixture: ComponentFixture<DesktopLibraryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopLibraryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLibraryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
