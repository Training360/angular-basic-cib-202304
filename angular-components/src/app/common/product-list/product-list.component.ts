import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() productList: Product[] = [];

  ngOnInit(): void {
    console.log('ProductListComponent inited!');
  }

  ngOnDestroy(): void {
    console.log('ProductListComponent will be destroy!');
  }
}
