import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../manage-user.service';
import { CustomerInformation } from '../customer-information';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private manageUserService:ManageUserService) { }

  ngOnInit(): void {
  }
  customerInformation:CustomerInformation=new CustomerInformation();

  errorMessage;
  errorMessageCondition=false;

  addCustomer(form:NgForm):void{
    this.manageUserService.addCustomer(this.customerInformation).subscribe(data=>
      {
        /**
       * This will reset the form after successfully submitted the data
       */
  
      form.resetForm();
      /*
      *The div which shows error will hide after making ngif false
      */
  
      this.errorMessageCondition=false;
      alert("Customer Added Successfully"); 
      },
    
      error=>
    {
      
      /*
      *The condition of div become true and that div will show respective error
      */
      this.errorMessageCondition=true;
  
      /*
      *Json.parse function convert string into object to work with
      */
      // this.errorMessage=JSON.parse(error.error).message;
      this.errorMessage=error.error;
      console.log("erroor occured",error);
    }
    );
  
  }
}
