import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './page/user/user.component';
import { HomeComponent } from './page/home/home.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { NavComponent } from './common/nav/nav.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { FilterPipe } from './pipe/filter.pipe';
import { OrderPipe } from './pipe/order.pipe';
import { DataTableComponent } from './common/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserEditComponent,
    NavComponent,
    UserCreateComponent,
    FilterPipe,
    OrderPipe,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
