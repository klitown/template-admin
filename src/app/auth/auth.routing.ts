import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

// Componentes
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule ({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class AuthRoutingModule {}