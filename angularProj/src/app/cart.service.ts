import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  clickCounter :number = 0;
  constructor() { }

  addToCart(product) {
    this.items.push(product);
    this.clickCounter ++;
    console.log(this.items)
  }
getItems(){
  return this.items;
}
clearCart(){
  this.items = [];
  return this.items;
}

}
