import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm:FormGroup;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.forgotPasswordForm = this.initForgotForm();
    this.forgotPasswordForm.reset();
  }


  initForgotForm(): FormGroup {
    return this.fb.group({
      email: [],
    })
  }

  sendLink() {
    let email = this.forgotPasswordForm.controls['email'].value
    this.authService.GetForgotPassword(email).subscribe(res => {
      this.forgotPasswordForm.reset();
    })
  }

  loginIn() {
    this.router.navigate(["/auth/login"]);
  }
}
