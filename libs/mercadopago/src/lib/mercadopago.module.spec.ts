import { async, TestBed } from '@angular/core/testing';
import { MercadopagoModule } from './mercadopago.module';

describe('MercadopagoModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MercadopagoModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(MercadopagoModule).toBeDefined();
  });
});
