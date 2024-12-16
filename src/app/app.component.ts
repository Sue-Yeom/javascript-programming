import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Define routes for the application
const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' }, // Default redirection
  { path: 'map', component: MapComponent },            // Route to the map component
  { path: '**', redirectTo: '/map' }                   // Wildcard route for unknown URLs
];

// Temporary placeholder component (MapComponent) to handle routing
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="map-container">
      <img src="assets/map-image.svg" alt="World Map" />
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
  `
})
export class MapComponent {
  countryCode: string = 'US';
  countryData: any;

  fetchCountryData(): void {
    console.log('Fetching country data...');
    // Add your service call logic here
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}