import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { usdaApiKey } from '../api-keys';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UsdaDbService } from './usda-db.service';


fdescribe('UsdaDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsdaDbService],
      imports: [
        HttpModule,
        HttpClientTestingModule
      ]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('gets food items from the usda db',
    inject([HttpTestingController, UsdaDbService],
      (httpMock: HttpTestingController, service: UsdaDbService) => {

      const query = 'cumin';
      const mockFoodResult = {
          "list": {
              "q": "cumin",
              "sr": "1",
              "ds": "Standard Referenceytyty",
              "start": 0,
              "end": 1,
              "total": 1,
              "group": "",
              "sort": "r",
              "item": [
                  {
                      "offset": 0,
                      "group": "Spices and Herbs",
                      "name": "Spices, cumin seed",
                      "ndbno": "02014",
                      "ds": "SR",
                      "manu": "none"
                  }
              ]
          }
      };
      service.foodQuery(query).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(mockFoodResult);
        }
      });

      const mockReq = httpMock.expectOne(`${service.baseURL}search/?format=json&q=${query}&sort=r&max=20&offset=0&ds=Standard Reference&api_key=${usdaApiKey}`);
      expect(mockReq.request.method).toEqual('GET');
      expect(mockReq.cancelled).toBeFalsy();

      mockReq.flush(mockFoodResult);

      httpMock.verify();


    })
  );
});
