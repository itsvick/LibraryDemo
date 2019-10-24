import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlayComponent } from './content-play.component';

describe('ContentPlayComponent', () => {
  let component: ContentPlayComponent;
  let fixture: ComponentFixture<ContentPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
