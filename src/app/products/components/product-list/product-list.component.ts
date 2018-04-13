import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductInfo, ProductFilter} from '../../../_interface/productinfo';

@Component({
  selector: 'aig-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() public items: ProductInfo[] = [];

  public readonly filters: ProductFilter[] = [
    <ProductFilter>{color: 'blue'},
    <ProductFilter>{color: 'green'},
    <ProductFilter>{color: 'gray'},
  ];

  public activeFilters: ProductFilter[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public itemsAfterFilter(): ProductInfo[] {
    return this.items.filter((item: ProductInfo) => {
      const matchesActiveFilter: boolean = this.activeFilters.reduce((prev, curr) => {
        if (item.colors.includes(curr.color)) {
          return prev && true;
        } else {
          return false;
        }
      }, true);

      return matchesActiveFilter;
    });
  }

  public updateActivatedFilters(filters: ProductFilter[]) {
    this.activeFilters = filters;
  }
}
