import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-form-add-invoice',
  templateUrl: './form-add-invoice.component.html',
  styleUrls: ['./form-add-invoice.component.css']
})
export class FormAddInvoiceComponent implements OnInit {

  addInvoiceForm = new FormGroup({
    date: new FormControl(''),
    mileage: new FormControl(''),
    serviceProvider: new FormControl(''),
    servicePerformed: new FormControl(''),
  });

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    let date = this.addInvoiceForm.value.date.trim();
    let mileage = this.addInvoiceForm.value.mileage.trim();
    let serviceProvider = this.addInvoiceForm.value.serviceProvider.trim();
    let servicePerformed = this.addInvoiceForm.value.servicePerformed.trim();

    if (!date || !mileage || !serviceProvider || !servicePerformed) { return; }

    this.invoiceService.addInvoice({ date, mileage, serviceProvider, servicePerformed } as Invoice)
      .subscribe();
  }

}
