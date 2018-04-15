import {Component, Injector, OnInit} from '@angular/core';
import {ProductsService} from '../../../_services/products.service';
import {ProductsComponent} from '../../products.component';
import {Helpers} from '../../../../providers/helpers/helpers';

@Component({
  selector: 'aig-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  host: {'(window:keydown)': 'hotkeys($event)'}
})
export class AddProductComponent implements OnInit {
  isAddActive: boolean = false;
  productObj: any = {};
  compoRef: any;
  constructor(private productsServices: ProductsService,
              public injector: Injector, public helpers: Helpers) {
    this.compoRef = this.injector.get(ProductsComponent);
  }

  ngOnInit() {
  }
  openAddNewDiv() {
    this.isAddActive = true;
  }
  insertProduct(pObj) {
    this.isAddActive = false;
    let item = this.helpers.getCookie('product_data');
    const mapData = {id: this.productsServices.productArray.length + 1, name: pObj.pName,
      price: pObj.price,
      colors: [pObj.color]};
    this.productsServices.productArray.push(mapData);
    this.compoRef.items = this.productsServices.productArray;
    this.helpers.setCookie('product_data', this.compoRef.items);
    this.productObj = {};
    }
  hotkeys(event) {
    if (event.keyCode === 65 && event.shiftKey) {
      this.openAddNewDiv();
    }
  }

}
