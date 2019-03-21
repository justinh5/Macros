import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { usdaApiKey } from '../api-keys';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsdaDbService {

  private baseURL: string;

  constructor(private http: Http) {
    this.baseURL = "https://api.nal.usda.gov/ndb/search/";
  }

  foodQuery(query: string, maxResults: number = 10) {
    // return this.http.get(`${this.baseURL}?format=json&q=${query}&sort=r&max=${maxResults}&offset=0&ds=Standard Reference&api_key=${usdaApiKey}`);

    // return this.parseFoodResults(response.json());
  }

  parseFoodResults(response) {
    // let result = {};
    // if(response) {
    //    con
    //
    //
    // }
    return response;
  }

}
