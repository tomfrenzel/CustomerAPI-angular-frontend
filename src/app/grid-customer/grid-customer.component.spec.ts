import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCustomerComponent } from './grid-customer.component';

describe('GridCustomerComponent', () => {
  let component: GridCustomerComponent;
  let fixture: ComponentFixture<GridCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
