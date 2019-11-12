import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineLibraryPageComponent } from './offline-library-page.component';

describe('OfflineLibraryPageComponent', () => {
  let component: OfflineLibraryPageComponent;
  let fixture: ComponentFixture<OfflineLibraryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineLibraryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineLibraryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
