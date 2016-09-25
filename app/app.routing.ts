import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventItemsList}       from './dashboard/event-items-list/event-items-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: EventItemsList
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);