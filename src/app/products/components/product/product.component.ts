import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ProductInfo} from '../../../_interface/productinfo';
import {CartService} from '../../../_services/cart.service';
import {Helpers} from '../../../../providers/helpers/helpers';

@Component({
  selector: 'aig-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;
  @Input() public size: number;
  @Input() public items: any;
  constructor(private cartService: CartService, public helpers: Helpers) {
  }
  public getCurrency(): string {
    return 'USD';
  }
  public addToCart(product: ProductInfo) {
    let cartItem = [];
    if (this.helpers.checkCookieExistOrNot('cart_data')) {
      cartItem = [...this.helpers.getCookie('cart_data'), product];
      this.helpers.setCookie('cart_data', cartItem);
    } else {
      this.helpers.setCookie('cart_data', [product]);
    }
      this.cartService.addToCart(product);
  }
}
