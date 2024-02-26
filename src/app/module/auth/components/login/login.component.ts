import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  invalidUser!: boolean;
  showPassword: boolean = false;
  createUser: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createUser.valueChanges.subscribe(() => {
      this.invalidUser = false;
    });
  }

  forgotPassword() {
    this.router.navigate(["/auth/forgot-password"]);
  }

  submit() {
    this.authenticationService.login(this.createUser.value).subscribe(
      (data: any) => {
        sessionStorage.setItem("username", this.createUser.value.username!);
        sessionStorage.setItem("access_token", data.access_token);
        sessionStorage.setItem("session_id", data.session_state);
        sessionStorage.setItem("userDetails", JSON.stringify(data));
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("refresh_token", data.refresh_token);
        let no = JSON.parse(sessionStorage.getItem("loginNo")!);
        if (no == 1) {
          this.authenticationService.userRole().subscribe((sucess: any) => {
            sessionStorage.setItem("userRoles", sucess[0]);
            this.router.navigate(["/service-request/service-request"]);
          });
        } else if (no == 2) {
          this.router.navigate(["/number/number"]);
        } else if (no == 3) {
          this.router.navigate(["/product-management"]);
        } else {
          this.router.navigate(["/customer"]);
        }
      },
      (error) => {
        this.invalidUser = true;
        if (error.status == 428) {
          sessionStorage.setItem("username", this.createUser.value.username!);
          this.router.navigate(["/crm/change-password"], {
            queryParams: { content: "update-password" },
          });
        } else {
          this.invalidUser = true;
        }
      }
    );
  }

  changePassword(flag: boolean) {
    this.showPassword = flag;
  }
}
