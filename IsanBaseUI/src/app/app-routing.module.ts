import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInControllerComponent } from './logged-in-controller/logged-in-controller.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'web', component:LoggedInControllerComponent, children:[
    
  ]},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
