import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/module/auth/components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { JenkinsComponent } from './components/jenkins/jenkins.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'confirm-password',
    component: ConfirmPasswordComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },{
    path:"home",
    component:LandingPageComponent
  },{
     path: 'jenkins',
     component: JenkinsComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
