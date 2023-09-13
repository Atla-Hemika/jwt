import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { userservice } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class userComponent {
  constructor(private mynavigation:Router,private ulog:userservice)
  {

  }
  UserLoginData(obj:any):void
  {
    console.log(obj.value);
    this.ulog.signinuser().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.reactiveFormlog.value.Username && a.Password === this.reactiveFormlog.value.Password
      });
      if(user){
        sessionStorage.setItem("token", user.token)
        console.log(user.token)
        alert('Welcome Dear User...!!!!');
        this.mynavigation.navigate(['Userhome']);
      }else{
        alert('Details Not Matched');
      }
      console.log(res);
    },err=>{
      console.log('Data Not Found...!!!!!');
    });
    //this.mynavigation.navigate(['Home']);
  }
  reactiveFormlog = new FormGroup({
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })
}