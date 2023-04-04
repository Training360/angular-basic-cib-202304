import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from 'src/app/common/product-list/product-list.component';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @Input() componentTitle: string = 'Product Manager';

  @ViewChild('list2') child!: ProductListComponent;

  @ViewChild('list1') child1!: ProductListComponent;

  isProductsDisplayed: boolean = false;

  products: Product[] = [
    {id: 1, name: 'Iron', active: true, price: 22000},
    {id: 2, name: 'Iron', active: true, price: 22000},
    {id: 3, name: 'Iron', active: true, price: 22000},
  ];

  switchProductList(): void {
    this.isProductsDisplayed = !this.isProductsDisplayed;

    if (this.isProductsDisplayed) {
      setTimeout( () => {
        console.log(this.child1);
      }, 0);
    }
  }

  ngOnInit(): void {
    console.log(this.child);
  }

  ngAfterViewInit(): void {
    console.log(this.child);
  }

}
