
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../interface/product';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  product:  Product[] = [];

  counter !: number


  constructor(
    private cartService: ApiService,
    private counterService: CardService
  ) {}

  ngOnInit() {
    this.getCartItems(); 

    this.counterService.getCartItems().subscribe((val) => this.counter = val)
    
  }

  getCartItems(): void {
    this.cartService.getCartItems().subscribe(
      (products) => {
        this.product = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  increaseCounter(){
      this.counterService.setCartItems(++this.counter)
    }
    
  decreaseCounter(){
    this.counterService.setCartItems(--this.counter)
  }
  
  removeItem(product: any) {
    this.product = this.product.filter((item) => item !== product);
    this.cartService.setCartItems(this.product);
  }

  calculateTotal() {
    let total = 0;
    this.product.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total; 
  }
}


  

