import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { PagesRoutingModule } from "./pages/pages.routing";
import { AuthRoutingModule } from "./auth/auth.routing";


// Componentes
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';



const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule ,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
