import { TestBed } from '@angular/core/testing';

import { ColombiaApiService } from './colombia-api.service';

describe('ColombiaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColombiaApiService = TestBed.get(ColombiaApiService);
    expect(service).toBeTruthy();
  });
});
