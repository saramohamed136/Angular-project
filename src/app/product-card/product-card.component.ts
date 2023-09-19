import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product !: Product;

  cartitems : number =0;
constructor(private router : Router , private cartService: CardService ){}
ngOnInit(){
  this.cartService
  .getCartItems()
  .subscribe((val) => (this.cartitems = val));
}


increaseCounter(){
  this.cartService.setCartItems(++this.cartitems)
}



redirectToDetails(id:number){

this.router.navigate(['product-details' , id])

}

}
