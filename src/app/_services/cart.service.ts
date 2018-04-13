import {Injectable} from '@angular/core';
import {ProductInfo} from '../_interface/productinfo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<ProductInfo[]> = new BehaviorSubject([]);
  private itemsInCart: ProductInfo[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: ProductInfo) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public removeFromCart(item: ProductInfo) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<ProductInfo[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.map((items: ProductInfo[]) => {
      return items.reduce((prev, curr: ProductInfo) => {
        return prev + curr.price;
      }, 0);
    });
  }
}
