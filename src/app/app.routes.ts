import { Routes } from '@angular/router';
import{ Home} form './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: Home,
    },

];
