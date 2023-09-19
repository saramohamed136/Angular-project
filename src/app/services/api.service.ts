import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    getProductList() {
      return this.http.get('https://dummyjson.com/products') 
         .pipe(
          map((response: any) => response.products)
         );
     }


     getProductDetails(id : number) { 
      return this.http.get(`https://dummyjson.com/products/${id}`) 
         .pipe(
           map((response: any) => response.products) 
         );
     } 


getCarttList() {
  return this.http.get('https://dummyjson.com/products') 
     .pipe(
       map((response: any) => response.products)
     );
 }


 getCartItems(): Observable<any> {
  return this.http.get('https://dummyjson.com/products').pipe(
    map((response: any) => response.products)
  );
}

setCartItems(items: any): Observable<any> {
  return this.http.post('https://dummyjson.com/products', { items });
}
}



  

