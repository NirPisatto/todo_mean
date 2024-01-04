import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TaskState } from './task.reducer';

export const selectTasks = (state: AppState) => state.tasks;


export const selectAllTasks = createSelector(
    selectTasks,
    (state: TaskState) => {
        console.log("in");

        console.log(state.tasks);
        return state.tasks
    }
);