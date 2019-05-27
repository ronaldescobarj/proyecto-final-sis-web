import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMerchComponent } from './add-merch.component';

describe('AddMerchComponent', () => {
  let component: AddMerchComponent;
  let fixture: ComponentFixture<AddMerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
