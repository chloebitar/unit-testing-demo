import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  getTotal(items: number[]): number {
    return items.reduce((sum, item) => sum + item, 0);
  }
}
//git test
