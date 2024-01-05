import { AppState } from '@state/app.state';
import { Component, OnInit } from '@angular/core';
import { addTask, loadTasks, setStatus } from '@state/task/task.actions';
import { selectAllTasks } from '@state/task/task.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { TaskService } from '@lib/services/task/task.service';
import { Task } from '@lib/interfaces/task.interface';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  constructor(private store: Store<AppState>, private taskService: TaskService) { }
  allTasks$ = this.store.select(selectAllTasks);
  status$ = this.store.select((state) => state.tasks.status);

  ngOnInit(): void {
    // Fetch data from API
    this.store.dispatch(setStatus({ "status": "loading" }));
    this.taskService.getData()
      .pipe().subscribe((data) => {
        if (data.success) {
          this.store.dispatch(loadTasks({ 'tasks': data.payload.tasks }));
          this.store.dispatch(setStatus({ "status": "success" }));
        }
      });
  }

  handleAddTask() {
    let newTask: Task = { "name": "test", "description": "test", "status": "pedding" }
    this.taskService.addTask(newTask)
  }

  handleDeleteTask(task: Task) {
    this.taskService.deleteTask(task)
  }

}
