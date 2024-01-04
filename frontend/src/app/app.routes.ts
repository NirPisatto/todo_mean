import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./pages/home')).routes,
    },
    {
        path: 'auth',
        loadChildren: async () => (await import('./pages/auth')).routes,
    },
    {
        path: 'tasks',
        loadChildren: async () => (await import('./pages/task')).routes,
    }
];
