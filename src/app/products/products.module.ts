import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {RouterModule} from '@angular/router';
import {routes} from './products.routes';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule} from '@angular/forms';
import {SortableTableDirective} from '../sortable-table/sortable-table.directive';
import {SortableColumnComponent} from '../sortable-table/sortable-column.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ColorListComponent,
    AddProductComponent,
    SortableTableDirective,
    SortableColumnComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {
}
