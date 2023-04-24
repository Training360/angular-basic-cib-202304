import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableComponent } from 'src/app/common/data-table/data-table.component';
import { OrderPipe } from 'src/app/pipe/order.pipe';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';

const mockUsers: User[] = [
  { id: 1, name: 'Iron', email: 'test@gmail.com', category: 'Admin', bio: '' },
  { id: 2, name: 'Bread', email: 'test@gmail.com', category: 'Admin', bio: '' },
  { id: 3, name: 'Lemon', email: 'test@gmail.com', category: 'Admin', bio: '' },
];

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        UserComponent, 
        DataTableComponent, 
        OrderPipe, 
        FilterPipe 
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getAll: (): Observable<User[]> => {
              return of(mockUsers);
            }
          }
        }
      ],    
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('users table should show', () => {
    const table = fixture.nativeElement.querySelector('table.table');

    expect(table).toBeTruthy();
  });
  
  it('table rows should exist', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('table.table tbody tr');

    expect(tableRows.length).toEqual(3);
  });
  
  it('user id should be correct', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('table.table tbody tr');

    expect(tableRows[0].querySelector('td').textContent).toMatch(/1/);
  });
  
  it('user name should be correct', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('table.table tbody tr');

    expect(tableRows[0].querySelector('td:nth-child(2)').textContent).toMatch(/Iron/);
  });
});
