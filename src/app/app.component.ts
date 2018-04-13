import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductInfo} from './_interface/productinfo';
import {CartService} from './_services/cart.service';

@Component({
  selector: 'aig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public cartItems: Observable<ProductInfo[]>;
  constructor(private cartService: CartService) {

    this.cartItems = this
      .cartService
      .getItems();

    this.cartItems.subscribe(_ => _);
  }
}
