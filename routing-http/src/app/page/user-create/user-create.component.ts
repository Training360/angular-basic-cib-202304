import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

export class CustomFormControl extends FormControl {
  errorMessage?: string = '';
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit{

  userService: UserService = inject(UserService);

  router: Router = inject(Router);

  user: User = new User();

  formGroup: FormGroup = new FormGroup({
    name: new CustomFormControl(
      this.user.name,
      [
        Validators.pattern('^[A-Z][A-Űa-Ű ]{1,20}$'),
        Validators.required,
      ],
    ),
    email: new CustomFormControl(
      this.user.email,
      [
        Validators.email,
        Validators.required,
      ],
    ),
    category: new CustomFormControl(
      this.user.category,
      [
        Validators.pattern('^[A-Z][A-Za-z]{1,9}$'),
        Validators.required,
      ],
    ),
  });

  get formControlNames(): string[] {
    return Object.keys(this.formGroup.controls);
  }

  ngOnInit(): void {
      (this.formGroup.controls['name'] as CustomFormControl).errorMessage = 'The name must be 2 characters long.';
  }

  onCreate(): void {
    this.userService.create(this.formGroup.value).subscribe(
      () => this.router.navigate(['/user'])
    );
  }

}
