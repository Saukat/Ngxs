import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEmployeeComponent } from './component/all-employee/all-employee.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';


const routes: Routes = [
  // {path:'', redirectTo:'all',pathMatch:'full'},
  {path:'all',component:AllEmployeeComponent},
  {path:'empDetails',component:EmployeeDetailsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
