import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any

  constructor() { }

  ngOnInit() {
    //このproductsに、importしたproductsを読み込ませる
    this.products = products
  }
}
