import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormAddInvoiceComponent } from './form-add-invoice/form-add-invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    FormAddInvoiceComponent,
    InvoiceSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
