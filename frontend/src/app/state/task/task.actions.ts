import { createAction, props } from '@ngrx/store';
import { Task } from '@interfaces/task.interface';

export const addTask = createAction(
    '[Todo Page] Add Todo',
    props<{ task: Task }>()
);

export const removeTask = createAction(
    '[Todo Page] Remove Todo',
    props<{ task: Task }>()
);

export const editTask = createAction(
    '[Todo Page] Edit Todo',
    props<{ task: Task }>()
);

export const loadTasks = createAction('[Todo Page] Load Todos', props<{ tasks: Task[] }>());

export const loadTodosSuccess = createAction(
    '[Todo API] Todo Load Success',
    props<{ todos: Task[] }>()
);

export const loadTodosFailure = createAction(
    '[Todo API] Todo Load Failure',
    props<{ error: String }>()
);

export const setStatus = createAction('[Todo API] Set status',
    props<{ status: string }>());