import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop_TaskDay1');
// Store Information

  storeName: string = "ElectroShop";

  storeDescription: string = "Your favorite electronics store";

  storeAddress: string = "Amman, Jordan";

  totalProducts: number = 12;

  isStoreOpen: boolean = true;

  currency: string = "USD";

  productNames: string[] = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Smart Watch",
  "Keyboard" 
];

 productPrices: number[] = [1200, 800, 150, 250, 100];

 featuredProduct = {
  name: 'Laptop',
  price: 750,
  description: 'High-performance laptop'
};


constructor() {
  if (this.isStoreOpen) {
    this.isStoreOpen = true;
  } else {
    this.isStoreOpen = false;
  }   
}
 discountPercentage: number = 10;
getDiscountedPrice(price: number, discount: number): number {
  return price - (price * discount / 100);
}

getTotalProducts(): number {
  return this.productNames.length;
}
getMaxPrice(): number {
  let max = this.productPrices[0];

  for (let i = 1; i < this.productPrices.length; i++) {
    if (this.productPrices[i] > max) {
      max = this.productPrices[i];
    }
  }

  return max;
}

getMinPrice(): number {
  let min = this.productPrices[0];

  for (let i = 1; i < this.productPrices.length; i++) {
    if (this.productPrices[i] < min) {
      min = this.productPrices[i];
    }
  }

  return min;
}
getTotalPrice(): number {
  let total = 0;

  for (let i = 0; i < this.productPrices.length; i++) {
    total += this.productPrices[i];
  }

  return total;
}
}