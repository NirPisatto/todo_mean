import { createReducer, on } from '@ngrx/store';
import {
    addTask,
    removeTodo,
    loadTasks,
    loadTodosSuccess,
    loadTodosFailure,
} from './task.actions';

import { Task } from '@interfaces/task.interface';

export interface TaskState {
    tasks: Task[];
    error: string;
    status: string;
}

export const initialState: TaskState = {
    tasks: [],
    error: '',
    status: 'pending',
};

export const taskReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    on(addTask, (state, { task }) => (
        {
            ...state,
            tasks: [...state.tasks, { ...task }]
        })
    ),
    // Remove the todo from the todos array
    on(removeTodo, (state, { id }) => ({
        ...state,
        // todos: state.todos.filter((todo) => todo.id !== id),
    })),
    // Trigger loading the todos
    on(loadTasks, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos,
        error: '',
        // status: 'success',
    })),
    // Handle todos load failure
    on(loadTodosFailure, (state, { error }) => ({
        ...state,
        error: error,
        // status: 'error',
    }))
);