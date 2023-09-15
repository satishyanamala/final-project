import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ShopService} from '../srvice/shop.service';
import {Emp} from '../srvice/model';


@Component({
  selector: 'app-shopin',
  templateUrl: './shopin.component.html',
  styleUrls: ['./shopin.component.css'],
  providers:[ShopService]
})
export class ShopinComponent implements OnInit {
  employee=[];
config:any;
  constructor(private Src:ShopService,private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
          //Create dummy data
    for (var i = 0; i < this.employee.length; i++) {
      this.employee.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.employee.length
    };
}

pageChanged(event){
  this.config.currentPage = event;
}
  
  ngOnInit() {
    this.getData();
  }

getData(){
  this.Src.get().subscribe((res)=>{
    this.employee=res as Emp[];
    // console.log(this.employee);
  })
}
movetoAddpage() {
  this._router.navigate(['../add'], { relativeTo: this._activatedRoute });
}
movetoregister() {
  this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
}

movetologin() {
  this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
}

}
