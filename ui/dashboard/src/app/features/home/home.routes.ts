import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MasterLayoutComponent } from '../../shared/layout/master-layout.component';

export const routes: Routes = [
    {
        path: 'home',
        component: MasterLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
]

