import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

export const routes: Routes = [

    {
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Grafica1Component },
          { path: 'account-settings', component: AccountSettingsComponent },
        ]
       },

];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}