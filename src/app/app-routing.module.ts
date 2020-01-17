import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { FormAddInvoiceComponent } from './form-add-invoice/form-add-invoice.component';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';

const routes: Routes = [
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'invoices/add', component: FormAddInvoiceComponent },
  { path: 'search', component: InvoiceSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
