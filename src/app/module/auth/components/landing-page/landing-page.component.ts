import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls:["./landing-page.component.css"]
})
export class LandingPageComponent {


  constructor(
    private landingPageService: LandingPageService,
    private router: Router
  ) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      500:{
    items:3
      },
      760: {
        items: 3
      },
      7820: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

  loginPageNav1(){
    sessionStorage.setItem('loginNo',JSON.stringify(1))
    this.router.navigate(['/auth/login']);
  }
  loginPageNav(){
    sessionStorage.setItem('loginNo',JSON.stringify(0))
    this.router.navigate(['/auth/login']);
  }
  loginPageNavNumber(){
    sessionStorage.setItem('loginNo',JSON.stringify(2))
    this.router.navigate(['/auth/login']);
  }

  /* 
   * TODO: This method logic will be fixed along with above two methods once the
   * above three methods are refactored properly.
   */
  loginToProductManagement(): void {
    // TODO: Once other code is fixed uncomment below line
    // this.landingPageService.setSelectedApplication('product-management');
    // Not a good way but since it was implemented this way continuing till other code is refactored
    sessionStorage.setItem('loginNo',JSON.stringify(3))
    this.router.navigate(['/auth/login']);
  }

  goToJenkinsDemoComponent(): void {
    this.router.navigate(['/auth/jenkins']);
  }
}
