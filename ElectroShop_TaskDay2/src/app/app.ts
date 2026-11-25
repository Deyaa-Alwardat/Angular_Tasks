
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductList } from './product-list/product-list';
import{ProductDetailsComponent} from './product-details-component/product-details-component';
import{HeaderComponent} from './header-component/header-component';
import { Navbar } from './navbar/navbar';
import { FooterComponent } from './footer-component/footer-component'; 
import { ShoppingCartComponent } from './shopping-cart-component/shopping-cart-component';   

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ProductList,ProductDetailsComponent,HeaderComponent,Navbar,FooterComponent,ShoppingCartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Product Information
 productName = signal('Wireless Headphones');

productDescription = signal('Bluetooth Headphones');

productPrice = signal(120);

productAvailability = signal(true);

 cartItem: any = null;

onAddToCart(item: any) {
  this.cartItem = item;
}
}
