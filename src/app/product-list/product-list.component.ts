import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    product: any;
    
  constructor(private productService: ApiService ) {}
  ngOnInit() { 
    this.productService.getProductList().subscribe(
   (data) => (this.product = data),
      (error) => console.log(error),
      () => console.log('complete')
    );
  }

}
