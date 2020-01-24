import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repair } from '../model/repair';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private repairUrl: string = "//localhost:8080/repair"

  constructor(private http: HttpClient) { }

  getRepairs(): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.repairUrl);
  }
}
