import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConcertComponent } from './view-concert.component';

describe('ViewConcertComponent', () => {
  let component: ViewConcertComponent;
  let fixture: ComponentFixture<ViewConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
