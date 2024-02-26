import { Component } from '@angular/core';
import { JenkinsService } from '../../services/jenkins.service';

@Component({
  selector: 'app-jenkins',
  templateUrl: './jenkins.component.html',
  styleUrls: ['./jenkins.component.css']
})
export class JenkinsComponent {

  response!: string ;

  constructor(private jenkinsService: JenkinsService) { }

  ngOnInit(): void {
  }

    getTest() {
      this.jenkinsService.getTest().subscribe(
        (response: string) => {
          this.response = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }

    createTest() {
      this.jenkinsService.createTest().subscribe(
        (response: string) => {
          this.response = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  
    updateTest() {
      this.jenkinsService.updateTest().subscribe(
        (response: string) => {
          this.response = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  
    deleteTest() {
      this.jenkinsService.deleteTest().subscribe(
        (response: string) => {
          this.response = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
}
