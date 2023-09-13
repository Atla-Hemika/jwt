import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DashboardAuthentication1 } from './Security/secure1';
import { UserhomeComponent } from './userhome/userhome.component';
import { DashboardAuthentication } from './Security/secure';
import { userComponent } from './user/user.component';

const routes: Routes = [
  {path:'Admin',component:AdminComponent},
  {path:'Adminhome',component:AdminhomeComponent, canActivate:[DashboardAuthentication1]},
  {path:'user',component:userComponent},
  {path:'Userhome',component:UserhomeComponent, canActivate:[DashboardAuthentication]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
