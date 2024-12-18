import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorldBankService } from '../services/world-bank.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="map-container">
      <img src="/map-image.svg" alt="World Map" />
    </div>
    <div>
      <input
        type="text"
        [(ngModel)]="countryCode"
        placeholder="Enter country code (e.g., US, TD, FR)"
      />
      <button (click)="fetchCountryData()">Get Country Data</button>
    </div>
    <div *ngIf="countryData">
      <h2>Country Information</h2>
      <p><strong>Country Name:</strong> {{ countryData.name }}</p>
      <p><strong>Capital City:</strong> {{ countryData.capitalCity }}</p>
      <p><strong>Region:</strong> {{ countryData.region }}</p>
      <p><strong>Income Level:</strong> {{ countryData.incomeLevel }}</p>
      <p><strong>Longitude:</strong> {{ countryData.longitude }}</p>
      <p><strong>Latitude:</strong> {{ countryData.latitude }}</p>
    </div>
  `,
})
export class MapComponent {
  countryCode: string = 'US';
  countryData: any;

  constructor(private worldBankService: WorldBankService) {}

  fetchCountryData(): void {
    this.worldBankService.fetchCountryData(this.countryCode).subscribe(
      (data) => {
        this.countryData = data;
        console.log('Fetched Country Data:', this.countryData);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}