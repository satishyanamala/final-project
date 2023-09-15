import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ShopService} from '../srvice/shop.service';
import { ResourceLoader } from '@angular/compiler';
import {Emp} from '../srvice/model';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers:[ShopService]
})
export class AddproductComponent implements OnInit {

  fileToUpload: File = null;
  constructor(private Src:ShopService,private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.getingData();
  }
employee=[];

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    
  }

  OnSubmit(Name,Price,Image){
   this.Src.postEmp(Name.value,Price.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Name.value = null;
       Image.value = null;
     }
   );
   
   this._router.navigate(['/home']);
  
  }
  getingData(){
    this.Src.get().subscribe((res)=>{
      this.employee=res as Emp[];
      // console.log(this.employee);
    })
  }
}
