import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Task',
        loadComponent: async () => (await import('./task.component')).TaskComponent,
    },
];
