import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { usdaApiKey } from '../api-keys';

@Injectable()
export class UsdaDbService {

  private baseURL: string;

  constructor(private http: Http) {
    this.baseURL = "https://api.nal.usda.gov/ndb/";
  }

  foodQuery(query: string, maxResults: number = 20) {
    return this.http.get(`${this.baseURL}search/?format=json&q=${query}&sort=r&max=${maxResults}&offset=0&ds=Standard Reference&api_key=${usdaApiKey}`);
  }

  foodReportByNdbno(ndbno: string) {
    return this.http.get(`${this.baseURL}V2/reports?ndbno=${ndbno}&type=b&format=json&api_key=${usdaApiKey}`);
  }

}
