import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userService: UserService = inject(UserService);

  userList$: Observable<User[]> = this.userService.getAll();

  // userList: User[] = [];

  // ngOnInit() {
  //   this.userService.getAll().subscribe(
  //     users => this.userList = users
  //   );
  // }
}
