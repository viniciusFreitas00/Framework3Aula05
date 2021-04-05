import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 2 + 3 = 5',
    inject([CalculadoraService], (service: CalculadoraService)=> {
      let soma = service.calcular(2, 3, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  )

});
