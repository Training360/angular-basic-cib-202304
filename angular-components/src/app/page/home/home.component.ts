import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() componentTitle: string = 'Product Manager';

  products: Product[] = [
    {id: 1, name: 'Iron', active: true, price: 22000},
    {id: 2, name: 'Iron', active: true, price: 22000},
    {id: 3, name: 'Iron', active: true, price: 22000},
  ];
}
