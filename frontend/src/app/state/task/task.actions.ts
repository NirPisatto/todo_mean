import { createAction, props } from '@ngrx/store';
import { Task } from '@interfaces/task.interface';

export const addTask = createAction(
    '[Todo Page] Add Todo',
    props<{ task: Task }>()
);

export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string }>()
);

export const loadTasks = createAction('[Todo Page] Load Todos');

export const loadTodosSuccess = createAction(
    '[Todo API] Todo Load Success',
    props<{ todos: Task[] }>()
);

export const loadTodosFailure = createAction(
    '[Todo API] Todo Load Failure',
    props<{ error: string }>()
);