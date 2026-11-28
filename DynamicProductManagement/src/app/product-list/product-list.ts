import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
@Component({
  imports: [NgClass, NgStyle],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
products = [
  {
    id: 1,
    name: 'Laptop',
    price: 850,
    category: 'Electronics',
    isAvailable: true,
    discount: 15,
    image: '/assets/laptop.jpg'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 450,
    category: 'Electronics',
    isAvailable: true,
    discount: 0,
    image: '/assets/smartphone.jpg'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 120,
    category: 'Accessories',
    isAvailable: false,
    discount: 10,
    image: '/assets/headphones.jpg'
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 180,
    category: 'Accessories',
    isAvailable: true,
    discount: 20,
    image: '/assets/watch.jpg'
  },
  {
    id: 5,
    name: 'Tablet',
    price: 300,
    category: 'Electronics',
    isAvailable: false,
    discount: 5,
    image: '/assets/tablet.jpg'
  },
  {
    id: 6,
    name: 'Keyboard',
    price: 65,
    category: 'Accessories',
    isAvailable: true,
    discount: 0,
    image: '/assets/keyboard.jpg'
  },
  {
    id: 7,
    name: 'Gaming Mouse',
    price: 45,
    category: 'Accessories',
    isAvailable: true,
    discount: 10,
    image: '/assets/mouse.jpg'
  },
  {
    id: 8,
    name: 'Monitor',
    price: 220,
    category: 'Electronics',
    isAvailable: false,
    discount: 0,
    image: '/assets/monitor.jpg'
  }
];
orderStatus = 'Pending';

selectedCategory = 'All Products';
}
