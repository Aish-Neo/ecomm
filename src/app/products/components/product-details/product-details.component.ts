import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../../_services/products.service';
import {ProductInfo} from '../../../_interface/productinfo';
import {CartService} from '../../../_services/cart.service';

@Component({
  selector: 'aig-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: any;

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService
    , private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productsService
        .getProduct(id);
    });
  }

  public addToCart(product: ProductInfo) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/');
  }
}
