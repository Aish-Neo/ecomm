import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../_services/cart.service';
import {ProductInfo} from '../../../_interface/productinfo';
import {of} from 'rxjs/observable/of';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'aig-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<ProductInfo[]> = of([]);
  public shoppingCartItems: ProductInfo[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: ProductInfo) {
    this.cartService.removeFromCart(item);
  }

}
