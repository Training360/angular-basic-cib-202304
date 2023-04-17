import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  namePattern: string = '^[A-Z][A-Űa-Ű ]{1,20}$';

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  userService: UserService = inject(UserService);

  router: Router = inject(Router);

  user: User = new User();

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => this.userService.get(params['id']))
  );

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   params => this.userService.get(params['id']).subscribe(
    //     respondedUser => this.user = respondedUser
    //   )
    // );
  }

  onUpdate(user: User): void {
    this.userService.update(user).subscribe(
      () => this.router.navigate(['/', 'user'])
    );
  }

}
