import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JenkinsService {

  constructor(private http: HttpClient) { }

  getTest(): Observable<string> {
    return this.http.get('http://192.168.1.16:6050/jenkins/test', { responseType: 'text' });
  }
  

  createTest(): Observable<string> {
    return this.http.post('http://192.168.1.16:6050/jenkins/test', {}, { responseType: 'text' });
  }

  deleteTest(): Observable<string> {
    return this.http.delete('http://192.168.1.16:6050/jenkins/test', { responseType: 'text' });
  }

  updateTest(): Observable<string> {
    return this.http.put('http://192.168.1.16:6050/jenkins/test', {}, { responseType: 'text' });
  }


  getAll() {
    return this.http.get<string>('/jenkins/all');
  }

}
