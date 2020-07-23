import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [
   {path:'addAdmin',component:AddAdminComponent},
   {path:'addCustomer',component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponent=[AddAdminComponent,AddCustomerComponent]
