import { Component,signal, Input, EventEmitter, Output} from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-product-details-component',
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  // Product Quantity
 quantity = signal(1);

// Product Information
 @Input() productName: string = '';
@Input() productDescription: string = '';
@Input() productPrice: number = 0;
@Input() isAvailable: boolean = false;

@Output() addToCart = new EventEmitter<any>();
addProductToCart(): void {
  console.log('Button clicked!');

  this.addToCart.emit({
    productName: this.productName,
    productPrice: this.productPrice,
    quantity: this.quantity()
  });

  console.log('Event emitted!');
}
  productImage: string = 'assets/laptop.jpg';
  discountPercentage: number = 10;

// Increase Quantity
  increaseQuantity(): void {
    this.quantity.update(value => value + 1);
  }

  // Decrease Quantity
  decreaseQuantity(): void {
    this.quantity.update(value => value > 1 ? value - 1 : 1);
  }
  checkAvailability(): string {
  if (this.isAvailable) {
    return 'Available';
  } else {
    return 'Not Available';
  }
}
}
