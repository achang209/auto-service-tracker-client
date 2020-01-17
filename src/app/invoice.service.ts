import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceUrl: string = "//localhost:8080/invoices"
  private searchUrl: string = "//localhost:8080/search"

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoiceUrl);
  }

  addInvoice(formdata: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.invoiceUrl, formdata);
  }

  searchByName(term: string): Observable<Invoice[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Invoice[]>(`${this.searchUrl}/?name=${term}`);
  }
}
