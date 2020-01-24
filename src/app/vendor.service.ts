import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private vendorUrl: string = "//localhost:8080/vendor"

  constructor(private http: HttpClient) { }

  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.vendorUrl);
  }
}
