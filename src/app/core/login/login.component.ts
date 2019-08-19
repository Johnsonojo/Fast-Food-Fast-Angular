import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public toasterService: ToastrManager,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }
  loginUser() {
    this.loading = true;
    const loginData = this.loginForm.value;

    this.authService
      .onLogin(this.formControls.email.value, this.formControls.password.value)
      .subscribe(
        res => {
          this.toasterService.successToastr('Login was successful');
          this.loading = false;
        },
        err => {
          this.toasterService.errorToastr('Login not successful');
          this.loading = false;
        },
      );
  }
}
