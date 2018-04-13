import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {CartService} from './_services/cart.service';
import {ProductsService} from './_services/products.service';
import {ProductsModule} from "./products/products.module";
import {SortService} from "./sortable-table/sort.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CartService, ProductsService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
