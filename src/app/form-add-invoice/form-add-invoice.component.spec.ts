import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddInvoiceComponent } from './form-add-invoice.component';

describe('FormAddInvoiceComponent', () => {
  let component: FormAddInvoiceComponent;
  let fixture: ComponentFixture<FormAddInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
