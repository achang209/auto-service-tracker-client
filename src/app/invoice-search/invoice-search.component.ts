import { Component, OnInit } from '@angular/core';
import { Invoice } from '../model/invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.css']
})
export class InvoiceSearchComponent implements OnInit {

  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  searchByVendor(name: string): void {
    this.invoiceService.searchByVendor(name)
    .subscribe(invoices => this.invoices = invoices);
  }

  searchByRepair(name: string): void {
    this.invoiceService.searchByRepair(name)
    .subscribe(invoices => this.invoices = invoices);
  }

}
