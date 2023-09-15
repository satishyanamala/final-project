import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ShopService} from '../srvice/shop.service';
import {Emp} from '../srvice/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ShopService]
})
export class LoginComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessagesEmail: string;
  serverErrorMessagesPassword: string;


  constructor(private Src:ShopService,private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }
  emplye={
    _id:"",
    name:"",
    role:"",
    email:"",
    password:"",
    cofirmpassword:"",
    } 

  login(Emp:string){

    this.Src.loginEmp(this.emplye).subscribe(
      res =>{
      this._router.navigate(['/home']);
      },
      err =>{
        if(err.status===421){
          this.serverErrorMessagesEmail = "email is wrong";
        }
        else if(err.status===420){
          this.serverErrorMessagesPassword = "password is wrong";
        }
      }
    )
  }
  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
  


}
