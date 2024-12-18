import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  template: `
    <div class="container">
      <!-- Column 1: Map -->
      <div class="column map-container">
        <img src="/map-image.svg" alt="World Map" />
      </div>

      <!-- Column 2: Country Information -->
      <div class="column info-container">
        <div>
          <input type="text" [(ngModel)]="countryCode" placeholder="Enter country code (e.g., US, FR)" />
          <button (click)="fetchCountryData()">Get Country Data</button>
        </div>

        <div *ngIf="countryData" class="country-info">
          <h2>Country Information</h2>
          <p><strong>Country Name:</strong> {{ countryData.name }}</p>
          <p><strong>Capital City:</strong> {{ countryData.capitalCity }}</p>
          <p><strong>Region:</strong> {{ countryData.region }}</p>
          <p><strong>Income Level:</strong> {{ countryData.incomeLevel }}</p>
          <p><strong>Longitude:</strong> {{ countryData.longitude }}</p>
          <p><strong>Latitude:</strong> {{ countryData.latitude }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
      .column {
        flex: 1;
      }
      .map-container img {
        width: 100%;
        height: auto;
      }
      .info-container {
        padding: 10px;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 8px;
      }
      .country-info p {
        margin: 5px 0;
      }
      input {
        margin-right: 10px;
        padding: 5px;
      }
      button {
        padding: 5px 10px;
        cursor: pointer;
      }
    `
  ]
})
export class MapComponent {
  countryCode: string = 'US';
  countryData: any;

  constructor(private http: HttpClient) {}

  fetchCountryData(): void {
    const url = `http://api.worldbank.org/v2/country/${this.countryCode}?format=json`;

    this.http.get(url).subscribe((response: any) => {
      if (response[1]) {
        const country = response[1][0];
        this.countryData = {
          name: country.name,
          capitalCity: country.capitalCity,
          region: country.region.value,
          incomeLevel: country.incomeLevel.value,
          longitude: country.longitude,
          latitude: country.latitude
        };
      } else {
        console.error('No country data found');
      }
    });
  }
}