import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userService: UserService = inject(UserService);

  configService: ConfigService = inject(ConfigService);

  router: Router = inject(Router);

  columns: ITableColumn[] = this.configService.userColumns;

  userList$: Observable<User[]> = this.userService.getAll();

  filterPhrase: string = '';

  filterKey: string = '';

  orderColumn: string = '';

  orderDirection: number = 1;

  onDelete(user: User): void {
    this.userService.delete(user).subscribe(
      () => this.userList$ = this.userService.getAll()
    );
  }
  
  onEdit(user: User): void {
    this.router.navigate(['/', 'user', 'edit', user.id]);
  }

  onOrder(col: string): void {
    if (col === this.orderColumn) {
      this.orderDirection *= -1;
    } else {
      this.orderDirection = 1;
    }

    this.orderColumn = col;
  }

  // userList: User[] = [];

  // ngOnInit() {
  //   this.userService.getAll().subscribe(
  //     users => this.userList = users
  //   );
  // }
}
