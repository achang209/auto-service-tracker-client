import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceProvider } from '../model/service-provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  private serviceProviderUrl: string = "//localhost:8080/service_provider"

  constructor(private http: HttpClient) { }

  getServiceProviders(): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this.serviceProviderUrl);
  }
}
