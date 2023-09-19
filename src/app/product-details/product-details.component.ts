import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 product :any;

  constructor(private activeRoute : ActivatedRoute , private productServices : ApiService ) {}

  ngOnInit(){
    console.log(this.activeRoute.snapshot.params['id']);
    this.productServices.getProductList().subscribe(
      (data) => (this.product = data),
         (error) => console.log(error),
         () => console.log('complete')
    );
  }

}


