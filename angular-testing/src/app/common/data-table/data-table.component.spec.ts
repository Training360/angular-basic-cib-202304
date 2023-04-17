import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';
import { User } from 'src/app/model/user';
import { OrderPipe } from 'src/app/pipe/order.pipe';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { callTester } from 'src/test/util';

class Product {
  id: number = 0;
  name: string = '';
  price: number = 0;
}

const mockProducts: Product[] = [
  { id: 1, name: 'Iron', price: 35000 },
  { id: 2, name: 'Bread', price: 750 },
  { id: 3, name: 'Lemon', price: 900 },
];

describe('DataTableComponent', () => {
  let component: DataTableComponent<Product>;
  let fixture: ComponentFixture<DataTableComponent<Product>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DataTableComponent,
        OrderPipe,
        FilterPipe, 
      ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableComponent<Product>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create table', () => {
    component.columns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'price', title: 'Price' },
    ];

    component.list$ = of(mockProducts);

    fixture.detectChanges();

    const table = (fixture.nativeElement as HTMLElement).querySelector('table.table');
    expect(table).toBeTruthy();
  });
  
  it('should create table rows', () => {
    component.columns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'price', title: 'Price' },
    ];

    component.list$ = of(mockProducts);

    fixture.detectChanges();

    const rows = (fixture.nativeElement as HTMLElement).querySelectorAll('table.table tbody tr');
    expect(rows).toBeTruthy();
    expect(rows.length).toEqual(3);
  });

  it('table data should be correct', () => {
    component.columns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'price', title: 'Price' },
    ];

    component.list$ = of(mockProducts);

    fixture.detectChanges();

    const rows = (fixture.nativeElement as HTMLElement).querySelectorAll('table.table tbody tr');

    expect( (rows[1] as HTMLTableRowElement).querySelector('td')?.textContent ).toMatch(/2/);
    expect( (rows[1] as HTMLTableRowElement).querySelector('td:nth-child(2)')?.textContent ).toMatch(/Bread/);
    expect( (rows[1] as HTMLTableRowElement).querySelector('td:nth-child(3)')?.textContent ).toMatch(/750/);

  });
  
  it('deleteTrigger should be call', () => {
    component.columns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'price', title: 'Price' },
    ];

    component.list$ = of(mockProducts);

    fixture.detectChanges();
    
    callTester(fixture, 'table.table tbody tr:nth-child(2) button.btn-danger', 'deleteTrigger', expect);

  });
  
  it('deleteTrigger should be call with a valid product', () => {
    component.columns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'price', title: 'Price' },
    ];

    component.list$ = of(mockProducts);

    fixture.detectChanges();

    spyOn(component, 'deleteTrigger');
    
    const button = (fixture.nativeElement.querySelector('table.table tbody tr:nth-child(2) button.btn-danger') as HTMLButtonElement);
    button.click();
    fixture.detectChanges();

    expect(component.deleteTrigger).toHaveBeenCalledWith(mockProducts[1]);

  });
  
  it('filterPipe should work', () => {
    component.columns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'price', title: 'Price' },
    ];

    component.list$ = of(mockProducts);

    fixture.detectChanges();
    
    const input = (fixture.nativeElement.querySelector('#filterInput') as HTMLInputElement);
    input.value = 'lemo';
    input.dispatchEvent( new Event('input') );
    fixture.detectChanges();

    const rows = (fixture.nativeElement as HTMLElement).querySelectorAll('table.table tbody tr');

    expect( (rows[0] as HTMLTableRowElement).querySelector('td')?.textContent ).toMatch(/3/);

  });
});
