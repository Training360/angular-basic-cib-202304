import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableComponent } from 'src/app/common/data-table/data-table.component';
import { OrderPipe } from 'src/app/pipe/order.pipe';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent, DataTableComponent, OrderPipe, FilterPipe ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
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
});
