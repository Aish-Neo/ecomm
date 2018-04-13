import {ProductInfo} from '../_interface/productinfo';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class ProductsService {
  private newItems: BehaviorSubject<ProductInfo[]> = new BehaviorSubject([]);
  private newItemArray: ProductInfo[] = [];
  productArray: any;
  constructor() {
    this.newItems.subscribe(_ => this.newItemArray = _);
  }
  public getProducts(): Observable<ProductInfo[]> {
    return this.products();
  }
  public addProducts(item: ProductInfo) {
    this.newItems.next([...this.productArray, item]);
    this.productArray = this.productArray.push(item);
    // return this.products();
  }
  public getProduct(id: number): Observable<ProductInfo> {
    // return this
    //   .products()
    //   .map(_ => {
    //     return _.find((item: ProductInfo) => {
    //       return item.id === id;
    //     });
    //   });
    return this.productArray.find((item: ProductInfo) => {
      return item.id === id;
    });
  }

  public products(): Observable<ProductInfo[]> {
    this.productArray = <ProductInfo[]>[
      <ProductInfo>{id: 1, name: 'Term Life', price: 123.09, colors: ['blue']},
      <ProductInfo>{id: 2, name: 'Whole Life', price: 99.09, colors: ['green', 'gray']},
      <ProductInfo>{id: 3, name: 'Endowment', price: 99.09, colors: ['green']},
      <ProductInfo>{id: 4, name: 'Money Back', price: 99.09, colors: ['blue', 'gray']},
      <ProductInfo>{id: 5, name: 'Personal accident', price: 99.09, colors: ['green', 'blue']},
      <ProductInfo>{id: 6, name: 'Green', price: 99.09, colors: ['green', 'blue']},
      <ProductInfo>{id: 7, name: 'Gray', price: 99.09, colors: ['gray']},
      <ProductInfo>{id: 8, name: 'Blue', price: 99.09, colors: ['blue']},
      <ProductInfo>{id: 9, name: 'All colors', price: 99.09, colors: ['gray', 'blue', 'green']},
    ];
    return of(this.productArray);
  }
  getUpdatedProduct() {
    return this.newItems.asObservable();
  }
}
