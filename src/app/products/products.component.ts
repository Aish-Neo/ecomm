import {Component, OnInit} from '@angular/core';
import {ProductInfo} from '../_interface/productinfo';
import {ProductsService} from '../_services/products.service';
import {CartService} from '../_services/cart.service';
import {Helpers} from "../../providers/helpers/helpers";

@Component({
  selector: 'aig-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent {

  public items: ProductInfo[] = [];

  constructor(private productsServices: ProductsService
    , private cartService: CartService, public helpers: Helpers) {
    if (this.helpers.checkCookieExistOrNot('product_data')) {
      this.items = this.helpers.getCookie('product_data');
      this.productsServices.productArray = this.items;
    } else {
      this.productsServices.getProducts()
        .subscribe((_) => {
            this.items = _;
            this.helpers.setCookie('product_data', _);
        });
    }
    this.cartService
      .getItems()
      .subscribe((items: ProductInfo[]) => {
      // remove items that are in our cart
        const allItems = this.items;
        this.items = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }
  private itemIsInCart(item: ProductInfo, cart: ProductInfo[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
