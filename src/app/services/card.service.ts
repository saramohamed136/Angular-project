import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private counter = new BehaviorSubject<number>(0); 

  constructor() { }

  getCartItems() { 
    return this.counter.asObservable();
  }

  setCartItems(newVal: number) {

    this.counter.next(newVal);
  }
}
