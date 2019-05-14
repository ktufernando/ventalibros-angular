import { TestBed } from '@angular/core/testing';

import { MercadopagoService } from './mercadopago.service';

describe('MercadopagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadopagoService = TestBed.get(MercadopagoService);
    expect(service).toBeTruthy();
  });
});
