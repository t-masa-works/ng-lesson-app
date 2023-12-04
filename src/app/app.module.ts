import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 起動時にindex.htmlの< app-root >に表示するコンポーネントはapp.module.ts内のbootstrapで設定
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    //CommonModuleも内包している、Topでのみ使用　*ngForや*ngIfを使用するのに必要
    BrowserModule,
    //どのコンポーネントを呼べばいいか、ルーティングするモジュール
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
