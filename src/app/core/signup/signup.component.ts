import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { emailValidator } from 'src/app/shared/validators/email-validator.directive';
import { usernameValidator } from 'src/app/shared/validators/usename-validator.directive';
import { passwordMatcher } from 'src/app/shared/validators/password-match.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public toasterService: ToastrManager,
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        username: ['', [Validators.required, usernameValidator]],
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required, Validators.pattern(/\d/)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: passwordMatcher('password', 'confirmPassword') },
    );
  }

  get formControls() {
    return this.signupForm.controls;
  }

  signupUser() {
    this.loading = true;

    this.authService
      .onSignup(
        this.formControls.username.value,
        this.formControls.email.value,
        this.formControls.password.value,
        this.formControls.confirmPassword.value,
      )
      .subscribe(
        res => {
          this.toasterService.successToastr('Signup was successful');
          this.loading = false;
        },
        err => {
          this.toasterService.errorToastr('Signup not successful');
          this.loading = false;
        },
      );
  }
}
