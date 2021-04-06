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

  it('Deve garantir que 2 + 3 = 5', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(2, 3, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }
  ));

  it('Deve garantir que 2 - 3 = 1', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let SUBTRACAO = service.calcular(2, 3, CalculadoraService.SUBTRACAO);
      expect(SUBTRACAO).toEqual(-1);
    }
  ));

  it('Deve garantir que 2 * 3 = 6', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let mult = service.calcular(2, 3, CalculadoraService.MULTIPLICACAO);
      expect(mult).toEqual(6);
    }
  ));

  it('Deve garantir que 5 / 5 = 1', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let DIVISAO = service.calcular(5, 5, CalculadoraService.DIVISAO);
      expect(DIVISAO).toEqual(1);
    }
  ));
});
