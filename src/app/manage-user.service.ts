import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInformation } from './customer-information';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {


  constructor(private http:HttpClient) { }

  addAdmin(admin:Admin):Observable<any>
  {
    console.log(admin);
    let url="http://localhost:1138/admin/addAdmin";
    return this.http.post(url,admin,{responseType:'text'});
  }

  addCustomer(customerInformation:CustomerInformation):Observable<any>
  {
    console.log(customerInformation);
    let url="http://localhost:1138/admin/addcustomers";
    return this.http.post(url,customerInformation,{responseType:'text'});
  }
}
