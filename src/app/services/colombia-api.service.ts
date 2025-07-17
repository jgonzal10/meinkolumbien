import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColombiaApiService {
  private baseUrl = 'https://api-colombia.com/api/v1';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Department`);
  }

  getCities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/City`);
  }

  getPresidents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/President`);
  }

  // weitere Methoden z. B. getNaturalParks(), getRegionById(id), etc.
}
