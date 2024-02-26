import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageService } from './services/landing-page.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { JenkinsComponent } from './components/jenkins/jenkins.component';
import { JenkinsService } from './services/jenkins.service';


@NgModule({
  declarations: [
    LoginComponent,
    LandingPageComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent,
    JenkinsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[
    AuthenticationService,
    LandingPageService,
    JenkinsService
  ]
})
export class AuthModule { }
