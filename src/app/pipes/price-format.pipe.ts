import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(stock: number, ...args: unknown[]): string {
    return stock ===0 ? 'Out of stock' : 'In stock';
  }

}
