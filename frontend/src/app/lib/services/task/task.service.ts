import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://api.mean.com';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2ODUzZTc1YjNmMjljZjkzZmQ2NzUiLCJ0aW1lIjoxNzA0MzYzMzI2ODUyfQ.5-fUEX2o_QcsMgsix6KV0x0brQ1uno5PJQ6MAdhX3a4'
    // Add more headers as needed
  });

  constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  //   const url = `${this.apiUrl}/tasks`;
  //   return this.http.get(url);
  // }

  getData() {
    console.log("in");
    const url = `${this.apiUrl}/tasks`;
    this.http.get(url, { headers: this.headers }).pipe().subscribe((data) => { console.log(data) });

  }


}
