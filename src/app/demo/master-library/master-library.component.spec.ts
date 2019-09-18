import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLibraryComponent } from './master-library.component';

describe('MasterLibraryComponent', () => {
  let component: MasterLibraryComponent;
  let fixture: ComponentFixture<MasterLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
