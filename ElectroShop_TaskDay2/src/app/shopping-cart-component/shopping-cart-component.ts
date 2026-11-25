import { Component ,Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shopping-cart-component',
  styleUrl: './shopping-cart-component.css',
  templateUrl: './shopping-cart-component.html',
})
export class ShoppingCartComponent {

 @Input() cartData: any = null;

getTotalPrice(): number {
  if (this.cartData != null) {
    return this.cartData.productPrice * this.cartData.quantity;
  }

  return 0;
}
}
