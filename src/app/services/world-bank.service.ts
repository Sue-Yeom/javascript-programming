import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorldBankService {
  constructor(private http: HttpClient) {}

  fetchCountryData(code: string): Observable<any> {
    const url = `https://api.worldbank.org/v2/country/${code}?format=json`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        if (response && response[1] && response[1][0]) {
          return {
            name: response[1][0].name,
            capitalCity: response[1][0].capitalCity,
            region: response[1][0].region.value,
            incomeLevel: response[1][0].incomeLevel.value,
            longitude: response[1][0].longitude, // Extra field
            latitude: response[1][0].latitude,   // Extra field
          };
        }
        return null;
      })
    );
  }
}