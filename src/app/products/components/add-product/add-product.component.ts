import {Component, Injector, OnInit} from '@angular/core';
import {ProductsService} from "../../../_services/products.service";
import {ProductsComponent} from "../../products.component";

@Component({
  selector: 'aig-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isAddActive: boolean = false;
  productObj: any = {};
  compoRef: any;
  constructor(private productsServices: ProductsService,
              public injector: Injector) {
    this.compoRef = this.injector.get(ProductsComponent);
  }

  ngOnInit() {
  }
  openAddNewDiv() {
    this.isAddActive = true;
  }
  insertProduct(pObj) {
    this.isAddActive = false;
    const mapData = {id: this.productsServices.productArray.length + 1, name: pObj.pName,
      price: pObj.price,
      colors: [pObj.color]};
    this.productsServices.productArray.push(mapData);
    console.log(this.productsServices.productArray);
    this.compoRef.items = this.productsServices.productArray;
    console.log("this.compoRef.items", this.compoRef.items);
    // this.productsServices.getProducts()
    //   .subscribe((_) => {
    //     _.push(mapData);
    //     // this.productsServices.addProducts(mapData);
    //     this.compoRef.items = _;
    //     this.productsServices.productArray = _;
    //   });
    this.productObj = {};
    }
  }
