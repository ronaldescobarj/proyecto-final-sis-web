import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMerchComponent } from './view-merch.component';

describe('ViewMerchComponent', () => {
  let component: ViewMerchComponent;
  let fixture: ComponentFixture<ViewMerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
