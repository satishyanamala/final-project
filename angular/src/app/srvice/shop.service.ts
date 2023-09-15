import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Emp} from './model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http:HttpClient) { }
emplye:Emp;

postEmp(name: string,price:string, fileToUpload: File) {
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  formData.append('Name', name);
  formData.append('Price', price);
  return this.http.post("http://localhost:2020/Img",formData)
}
get(){
  return this.http.get("http://localhost:2020/get");
}
registerEmp(emp:Emp){
  return this.http.post("http://localhost:2020/register",emp)
}

loginEmp(emp:Emp){
  return this.http.post("http://localhost:2020/login",emp)
        //  .catch(this.errorHandler);
}

}
