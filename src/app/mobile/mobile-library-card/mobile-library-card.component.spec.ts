import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLibraryCardComponent } from './mobile-library-card.component';

describe('MobileLibraryCardComponent', () => {
  let component: MobileLibraryCardComponent;
  let fixture: ComponentFixture<MobileLibraryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLibraryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLibraryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
