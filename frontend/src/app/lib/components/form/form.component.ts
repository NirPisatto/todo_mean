import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';


import { TaskService } from '@lib/services/task/task.service';
import { Task } from '@lib/interfaces/task.interface';

@Component({
  selector: 'task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatOptionModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  @Input() type: 'edit' | 'create' = 'create';
  @Input() handleOnSubmit: Function = (task: Task) => { };
  @Input() preTask?: Task;
  @Input() toggleActionTo: Function = (action: 'list' | 'create' | 'edit') => { };

  @Output() onToggleAction = new EventEmitter<string>();

  formTitle = this.type === 'edit' ? 'Edit Task' : 'Create Task';
  buttonTitle = this.type === 'edit' ? 'Edit' : 'Create';

  constructor(private taskService: TaskService) { }

  taskFormGroup = new FormGroup({
    name: new FormControl<String>(''),
    description: new FormControl<String>(''),
    status: new FormControl<String>(''),
  });

  ngOnInit(): void {
    this.formTitle = this.type === 'edit' ? 'Edit Task' : 'Create Task';
    this.buttonTitle = this.type === 'edit' ? 'Edit' : 'Create';
    if (this.type === 'edit') {
      let preT = {
        'name': this.preTask?.name || null,
        'description': this.preTask?.description || null,
        'status': this.preTask?.status || null,
      };
      this.taskFormGroup.setValue(preT);
    } else {
      this.taskFormGroup.setValue({ name: 'Default', description: 'None', status: 'new' });
    }
  }

  onSubmit() {
    let task = { ...this.preTask, ...this.taskFormGroup.value }
    this.handleOnSubmit(task);
    this.onToggleAction.emit('list');
  }
}
