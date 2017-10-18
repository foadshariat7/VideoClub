import { TestBed, inject } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketService]
    });
  });

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy();
  }));
});
