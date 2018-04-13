import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ProductInfo} from "../../../_interface/productinfo";
import {CartService} from "../../../_services/cart.service";

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
  constructor(private cartService: CartService) {
  }
  public getCurrency(): string {
    return 'USD';
  }
  public addToCart(product: ProductInfo) {
    this.cartService.addToCart(product);
  }
}
