import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';


const routes: Routes = [

  { 
    path: 'products', component: ProductComponent,
    children: [
      //router-outletと紐づく localhost:4041の語尾に何もついていない、detailがついている等振り分ける
      { path: '', component: ProductListComponent},
      //:をつけると、動的ページとして認識される
      { path: ':productId', component:ProductDetailComponent},

    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    //ngForやngIfなどを使用するために必要なモジュール　トップ以外のモジュールで使用
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
