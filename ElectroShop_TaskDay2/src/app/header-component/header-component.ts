import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header-component',
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {

  storeName: string = 'ElectroShop';

  welcomeMessage: string = 'Welcome to our store!';

  slogan: string = 'Everything You Need in One Place';
}
