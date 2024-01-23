import { Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

export const routes: Routes = [
    {
        path:'client/list',
        component:ClientsComponent,
    },
    {
        path:'client/new',
        component:ClientsAddComponent,
    },
    {
        path:'client/edit',
        component:ClientEditComponent
    }
];
