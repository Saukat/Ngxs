import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { GetEmployee } from 'src/app/store/action/employee.action';
import { EmployeeState } from 'src/app/store/state/employee.state';


@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit,OnDestroy {

@Select(EmployeeState.getEmployeeList) employee$:Observable<Employee[]>

@Select(EmployeeState.getEmployeeLoaded) employeeLoaded$:Observable<boolean>
employeeSub:Subscription;
  constructor(private store: Store) { }
  

  ngOnInit() {
    this.getEmployees();

    // this.employee$.subscribe(
    //   res=>{
    //     console.log("Slice DAta",res);
        
    //   },error=>{
    //     console.log("error");
        
    //   }
      
    // )}
  }

  getEmployees() {
    this.employeeSub =this.employeeLoaded$.subscribe(loadedEmployee=>{
      console.log("Booleanaa",loadedEmployee);
      
      if(!loadedEmployee){
        this.store.dispatch(new GetEmployee());
      }
    })
  }

  ngOnDestroy(){
    this.employeeSub.unsubscribe();
  }


  
}
