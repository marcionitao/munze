import { TestBed, inject } from '@angular/core/testing';

import { CoinsService } from './coins.service';

describe('CoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinsService]
    });
  });

  it('should ...', inject([CoinsService], (service: CoinsService) => {
    expect(service).toBeTruthy();
  }));
});
