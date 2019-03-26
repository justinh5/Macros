import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { usdaApiKey } from '../api-keys';

@Injectable()
export class UsdaDbService {

  public baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = "https://api.nal.usda.gov/ndb/";
  }

  foodQuery(query: string, maxResults: number = 20) {
    return this.http.get<any>(`${this.baseURL}search/?format=json&q=${query}&sort=r&max=${maxResults}&offset=0&ds=Standard Reference&api_key=${usdaApiKey}`);
  }

  foodReportByNdbno(ndbno: string) {
    return this.http.get<any>(`${this.baseURL}V2/reports?ndbno=${ndbno}&type=b&format=json&api_key=${usdaApiKey}`);
  }

}
