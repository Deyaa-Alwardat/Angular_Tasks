import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-details-component',
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {

// Product Information
  productName: string = 'Laptop';

  productDescription: string = 'High-performance laptop for work and gaming';

  productPrice: number = 750;

  productImage: string = 'assets/laptop.jpg';

  // Product Status
  quantity: number = 5;

  isAvailable: boolean = true;

  discountPercentage: number = 10;
  
}
