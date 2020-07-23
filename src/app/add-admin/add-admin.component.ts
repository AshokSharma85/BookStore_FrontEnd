import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../manage-user.service';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private manageUserService:ManageUserService) { }

  admin:Admin=new Admin();
  errorMessage;
  errorMessageCondition=false;
  ngOnInit(): void {
  }

  addAdmin(form:NgForm):void
  {
    this.manageUserService.addAdmin(this.admin).subscribe(data=>
    {
      /**
     * This will reset the form after successfully submitted the data
     */

    form.resetForm();
    /*
    *The div which shows error will hide after making ngif false
    */

    this.errorMessageCondition=false;
    alert("Admin Added Successfully"); 
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
