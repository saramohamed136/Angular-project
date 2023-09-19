import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  cartitems !: number
  constructor(private cartService: CardService){}

  ngOnInit(){
    this.cartService.getCartItems().subscribe((val) => this.cartitems = val)

}

}
