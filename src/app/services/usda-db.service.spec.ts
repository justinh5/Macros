import { TestBed, inject } from '@angular/core/testing';

import { UsdaDbService } from './usda-db.service';

describe('UsdaDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsdaDbService]
    });
  });

  it('should be created', inject([UsdaDbService], (service: UsdaDbService) => {
    expect(service).toBeTruthy();
  }));
});
