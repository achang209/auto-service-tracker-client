import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '../model/invoice';
import { ServiceProvider } from '../model/service-provider';
import { ServiceProviderService } from '../service/service-provider.service';
import { Vendor } from '../model/vendor';
import { VendorService } from '../service/vendor.service';
import { Repair } from '../model/repair';
import { RepairService } from '../service/repair.service';

@Component({
  selector: 'app-form-add-invoice',
  templateUrl: './form-add-invoice.component.html',
  styleUrls: ['./form-add-invoice.component.css']
})
export class FormAddInvoiceComponent implements OnInit {

  userFile: File;
  vendors: Vendor[];
  repairs: Repair[];
  addInvoiceForm = new FormGroup({
    date: new FormControl(''),
    mileage: new FormControl(''),
    vendorId: new FormControl(''),
    repairId: new FormControl('')
  });

  constructor(private invoiceService: InvoiceService, 
    private vendorService: VendorService, 
    private repairService: RepairService) { }

  ngOnInit() {
    this.getVendors();
    this.getRepairs();
  }

  getVendors(): void {
    this.vendorService.getVendors()
      .subscribe(vendors => this.vendors = vendors);
  }

  getRepairs(): void {
    this.repairService.getRepairs()
      .subscribe(repairs => this.repairs = repairs);
  }

  onSelectFile(event) {
    const file: File = event.target.files[0];
    this.userFile = file;
  }

  onSubmit(): void {
    let date = this.addInvoiceForm.value.date.trim();
    let mileage = this.addInvoiceForm.value.mileage.trim();
    let vendorId = this.addInvoiceForm.value.vendorId.trim();
    let repairId = this.addInvoiceForm.value.repairId.trim();

    if (!date || !mileage || !vendorId || !repairId) { return; }

    let invoice = this.addInvoiceForm.value;
    const formData: FormData = new FormData();
    formData.append('invoice', JSON.stringify(invoice));
    formData.append('file', this.userFile);
    

    this.invoiceService.addInvoice(formData)
      .subscribe();
  }

}
