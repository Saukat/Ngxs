import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { EmpService } from "src/app/appService/emp.service";
import { Employee } from "src/app/models/employee";
import { GetEmployee } from "../action/employee.action";
import {tap} from "rxjs/operators";




//state model
export class EmployeeStateModel{
    employees:any;
    employeeLoaded:boolean;
}

//state
@State<EmployeeStateModel>({
    name:'employees',
    defaults:{
        employees:[],
        employeeLoaded:false
    }
})

//class
@Injectable()
export class EmployeeState{

  

    constructor(private _empService:EmpService){}
     
    //selectors has logic to get state data

    //Get Employee list from state
    @Selector()
    static getEmployeeList(state:EmployeeStateModel){
          return state.employees
    }

     //Get Employee info
     @Selector()
     static getEmployeeLoaded(state:EmployeeStateModel){
           return state.employeeLoaded
     }

    @Action(GetEmployee)
    getEmployee({getState,setState}:StateContext<EmployeeStateModel>){
       console.log("Employee State model",EmployeeStateModel);
       
        console.log('State Action');
       return  this._empService.getAllEmployee().pipe(tap(res=>{
            // console.log("Tap Result",res);

            const state=getState();
            // console.log("State",state);
            setState({
              ...state,
              employees:res,
              employeeLoaded:true
            })
            
        }))
    }
}