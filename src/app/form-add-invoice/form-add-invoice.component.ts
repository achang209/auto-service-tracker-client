import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'app-form-add-invoice',
  templateUrl: './form-add-invoice.component.html',
  styleUrls: ['./form-add-invoice.component.css']
})
export class FormAddInvoiceComponent implements OnInit {

  userFile: File;

  addInvoiceForm = new FormGroup({
    date: new FormControl(''),
    mileage: new FormControl(''),
    serviceProvider: new FormControl(''),
    servicePerformed: new FormControl('')
  });

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  onSelectFile(event) {
    const file: File = event.target.files[0];
    this.userFile = file;
  }

  onSubmit(): void {
    let date = this.addInvoiceForm.value.date.trim();
    let mileage = this.addInvoiceForm.value.mileage.trim();
    let serviceProvider = this.addInvoiceForm.value.serviceProvider.trim();
    let servicePerformed = this.addInvoiceForm.value.servicePerformed.trim();

    if (!date || !mileage || !serviceProvider || !servicePerformed) { return; }

    let invoice = this.addInvoiceForm.value;
    const formData: FormData = new FormData();
    formData.append('invoice', JSON.stringify(invoice));
    formData.append('file', this.userFile);
    

    this.invoiceService.addInvoice(formData)
      .subscribe();
  }

}
