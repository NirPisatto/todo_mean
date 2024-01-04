import { AppState } from '@state/app.state';
import { Component, OnInit } from '@angular/core';
import { addTask } from '@state/task/task.actions';
import { Task } from '@lib/interfaces/task.interface';
import { selectAllTasks } from '@state/task/task.selectors';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TaskService } from '@lib/services/task/task.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  constructor(private store: Store<AppState>, private taskService: TaskService) { }

  task = { title: 'test', description: 'test' } as Task;

  tasks: Task[] = [this.task]

  allTasks$ = this.store.select(selectAllTasks);
  // allTasks: Task[] = this.store.selectSignal(selectAllTasks);


  ngOnInit(): void {
    this.taskService.getData()
  }

  addTask() {
    this.store.dispatch(addTask({ task: this.task }));
  }

}
