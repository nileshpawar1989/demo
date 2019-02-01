import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCComplaintComponent } from './customer-c-complaint.component';

describe('CustomerCComplaintComponent', () => {
  let component: CustomerCComplaintComponent;
  let fixture: ComponentFixture<CustomerCComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
