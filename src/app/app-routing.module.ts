import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  //URLに何もないときに、空ページに飛ばないように、リダイレクトを設定する
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  //router-outletと紐づく localhost:4041の語尾に何もついていない、detailがついている等振り分ける
  // { path: '', component: ProductListComponent},
  // { path: 'detail', component:ProductDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
