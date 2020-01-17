import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

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

  searchByProvider(name: string): void {
    this.invoiceService.searchByProvider(name)
    .subscribe(invoices => this.invoices = invoices);
  }

  searchByService(name: string): void {
    this.invoiceService.searchByService(name)
    .subscribe(invoices => this.invoices = invoices);
  }

}
