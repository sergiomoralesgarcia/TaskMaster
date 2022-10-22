import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Assignment } from '../models/assigment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  momentjs:any = moment;
  private _assignments:Assignment[] = [
    {
      id:1,
      idPerson:1,
      idTask:1,
      createdAt:this.momentjs().toISOString(),
      dateAndTime:this.momentjs().add(1, 'days').toISOString(),
    },
    {
        id:2,
        idPerson:2,
        idTask:2,
        createdAt:this.momentjs().toISOString(),
        dateAndTime:this.momentjs().add(1, 'days').toISOString(),
      }
  ];

  id:number = this._assignments.length+1;
  constructor() { }

  getAssigns(){
    return this._assignments;
  }

  getAssignById(id:number){
    return this._assignments.find(a=>a.id==id);
  }

  getAssignsByTaskId(taskId:number):Assignment[]{
    return this._assignments.filter(a=>a.idTask == taskId);
  }

  getAssignsByPersonId(personId:number):Assignment[]{
    return this._assignments.filter(a=>a.idPerson == personId);
  }

  deleteAssignById(id:number){
    this._assignments = this._assignments.filter(a=>a.id != id); 
  }

  addAssign(assingment:Assignment){
    assingment.id = this.id++;
    this._assignments.push(assingment);
  }

  updateAssign(assignment:Assignment){
    var _assignment = this._assignments.find(a=>a.id==assignment.id);
    if(_assignment){
      _assignment.idTask = assignment.idTask;
      _assignment.idPerson = assignment.idPerson;
      _assignment.createdAt = assignment.createdAt;
      _assignment.dateAndTime = assignment.dateAndTime;
    }
    
  }
}
