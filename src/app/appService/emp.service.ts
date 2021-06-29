import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  getAllEmployeeUrl="http://localhost:8080/api/employee/allEmployee";

  constructor(private http:HttpClient) { }

   getAllEmployee(){
     return this.http.get(this.getAllEmployeeUrl);
   }

}
