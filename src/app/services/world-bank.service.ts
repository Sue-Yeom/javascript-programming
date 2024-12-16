import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldBankService {
  private baseUrl = 'https://api.worldbank.org/v2';

  constructor(private http: HttpClient) {}

  getCountryData(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/country/${countryCode}?format=json`);
  }
}