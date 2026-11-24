import { Component } from '@angular/core';

// Interface
interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {

  // Products Array
  products: Product[] = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'assets/laptop.jpg',
      isAvailable: true
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'assets/smartphone.jpg',
      isAvailable: true
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'assets/headphones.jpg',
      isAvailable: true
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'assets/watch.jpg',
      isAvailable: true
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'assets/keyboard.jpg',
      isAvailable: false
    }
  ];

  buyNow(productName: string): void {
    alert('You selected ' + productName);
  }

}