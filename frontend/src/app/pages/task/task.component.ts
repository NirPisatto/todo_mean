import { AppState } from '@state/app.state';
import { Component, OnInit } from '@angular/core';
import { addTask, loadTasks, setStatus } from '@state/task/task.actions';
import { selectAllTasks } from '@state/task/task.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { TaskService } from '@lib/services/task/task.service';
import { Task } from '@lib/interfaces/task.interface';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FormComponent } from '@components/form/form.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  constructor(private store: Store<AppState>, public taskService: TaskService) { }
  public selectedTask?: Task;
  currentAction: 'list' | 'create' | 'edit' = 'list';
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

  handleAddTask(newTask: Task) {
    this.taskService.addTask(newTask)
    this.toggleActionTo('list');
  }

  handleEditTask(task: Task) {
    this.taskService.updateTask(task)
    this.toggleActionTo('list');
  }

  handleSetupEditForm(task: Task) {
    this.selectedTask = task;
    this.toggleActionTo('edit');
  }

  handleDeleteTask(task: Task) {
    if (confirm(`Are you sure you want to delete ${task.name} [${task._id}]?`))
      this.taskService.deleteTask(task)

  }

  toggleActionTo(action: 'list' | 'create' | 'edit') {
    this.currentAction = action;
  }

  toggleTo(action: any) {
    this.toggleActionTo(action);
  }

}
