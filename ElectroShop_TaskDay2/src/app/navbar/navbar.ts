import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
 selectedPage: string = 'Home';

  selectPage(page: string): void {
    this.selectedPage = page;
  }
  
}
