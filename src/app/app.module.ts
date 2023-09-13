import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { userservice } from './user.service';
import { DashboardAuthentication } from './Security/secure';
import { DashboardAuthentication1 } from './Security/secure1';

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    AdminComponent,
    AdminhomeComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [userservice,DashboardAuthentication,DashboardAuthentication1],
  bootstrap: [AppComponent]
})
export class AppModule { }
