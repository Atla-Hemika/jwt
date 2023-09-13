import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  session?:any;
  constructor(private mynavigation:Router,private ulog:userservice)
  {
    this.session = sessionStorage.getItem("token")
  }
  Itemslist():void
  {
    this.mynavigation.navigate(['Items'])
  }
  Cart():void
  {
    this.mynavigation.navigate(['Cart'])
  }
  logoutUser():void
  {
    sessionStorage.removeItem("token");
    this.mynavigation.navigate(['user'])
  }
}