import { Routes } from '@angular/router';


const siteTitle = 'My Site'
export const routes: Routes = [
    {
        path: '',
        title: siteTitle,
        loadComponent: () => import('src/app/pages/home'),
    },
];
