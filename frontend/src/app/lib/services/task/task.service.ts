import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { Task } from '@lib/interfaces/task.interface';
import { addTask, removeTask, editTask } from '@state/task/task.actions';

interface BaseResponse {
  // ... (other properties)
  payload: any;
  success: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://api.mean.com';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2ODUzZTc1YjNmMjljZjkzZmQ2NzUiLCJ0aW1lIjoxNzA0MzYzMzI2ODUyfQ.5-fUEX2o_QcsMgsix6KV0x0brQ1uno5PJQ6MAdhX3a4'
  });

  constructor(private http: HttpClient, private store: Store<AppState>,) { }



  // getData(): Observable<any> {
  //   const url = `${this.apiUrl}/tasks`;
  //   return this.http.get(url);
  // }

  getData(): Observable<any> {
    const url = `${this.apiUrl}/tasks`;
    return this.http.get(url, { headers: this.headers })
  }

  addTask(task: Task): void {
    const url = `${this.apiUrl}/tasks`;
    this.http.post<BaseResponse>(url, task, { headers: this.headers }).subscribe((data) => {
      this.store.dispatch(addTask({ task: data.payload.task }));
    }, (error) => {
      console.log(error);
    });
  }

  deleteTask(task: Task): void {
    const url = `${this.apiUrl}/tasks`;
    this.http.delete<BaseResponse>(url, { headers: this.headers, body: task }).subscribe((data) => {
      if (data.success) {
        this.store.dispatch(removeTask({ task: task }));
      }
    });
  }

  updateTask(task: Task): void {
    const url = `${this.apiUrl}/tasks`;
    this.http.put<BaseResponse>(url, task, { headers: this.headers }).subscribe((data) => {
      if (data.success) {
        this.store.dispatch(editTask({ task: task }));
      }
    });
  }
}
