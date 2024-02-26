import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../../confirm-password.validator.';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit{
  confirmPasswordForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  verificationCode!: string;
  varifyRandomCode!: number;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router:Router) {
    this.confirmPasswordForm = this.initForgotForm();
    this.route.queryParams.subscribe(params => {
      this.verificationCode = params['verificationCode'];
    });
  }

  ngOnInit() {
    this.authService.getVerifyRandomCodes(this.verificationCode).subscribe(res => {
      this.varifyRandomCode = res.status;    
    })
  }

  changePassword(flag: boolean) {
    this.showPassword = flag;
  }
  changeConfirmPassword(password: boolean) {
    this.showConfirmPassword = password;
  }

  initForgotForm(): FormGroup {
    return this.fb.group({
      email: [''],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      randomCode: ['']
    },
      {
        validator: ConfirmPasswordValidator("password", "newPassword")
      }
    )
  }

  submit() {
    if (this.varifyRandomCode == 200) {
      this.confirmPasswordForm.controls['randomCode'].patchValue(this.verificationCode);
      this.authService.PostChangePasswordWithRandomString(this.confirmPasswordForm.value).subscribe(res => {
        this.confirmPasswordForm.reset();
        location.href = "http://192.168.1.16:9090/aviatecx-master/#/auth/home";
        
      })
    }
  }

}
