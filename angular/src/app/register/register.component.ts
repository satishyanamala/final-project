import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ShopService} from '../srvice/shop.service';
import {Emp} from '../srvice/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ShopService]
})
export class RegisterComponent implements OnInit {

    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    showSucessMessage: boolean;
    serverErrorMessagesDE: string;
    serverErrorMessagesPN: string;
  
    constructor(private emps:ShopService, private _router: Router,
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
    
  
  register(Emp:string){
    this.emps.registerEmp(this.emplye).subscribe(
      res => {
        this._router.navigate(['/login']);
      },
      err => {
        if (err.status === 422) {
          // this.serverErrorMessages = err.error.join('<br/>');
          this.serverErrorMessagesDE = "This email adress is already exist";
        }
       else if(err.status===423){
        this.serverErrorMessagesPN = "Password was not match";
       }
      }
    )
  }
  
  
movetologin() {
  this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
}
  
  

}
