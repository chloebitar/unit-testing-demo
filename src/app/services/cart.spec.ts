import { TestBed } from '@angular/core/testing';

import { Cart } from './cart';

describe('Cart', () => {
  let service: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    it('should calculate total correctly', () => {
      const result = service.getTotal([10, 20, 30]);
      expect(result).toBe(50);
    });

    it('should return 0 for empty array', () => {
      const result = service.getTotal([]);
      expect(result).toBe(0);
    });

});
