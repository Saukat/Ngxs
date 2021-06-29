import { Employee } from "src/app/models/employee";

export class AddEmployee{
    static readonly type='[Employee] Add';
    constructor(public payload:Employee){}
}

export class GetEmployee{
    static  type='[Employee] Get';
}

export class DeleteEmployee{
    static readonly type='[Employee] Delete';
    constructor(public id:String){}
}

export class UpdateEmployee{
    static readonly type='[Employee] Update';
    constructor(public payload:Employee){}

}