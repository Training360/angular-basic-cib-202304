import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserComponent } from './page/user/user.component';
import { UserCreateComponent } from './page/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'user/create',
    component: UserCreateComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
