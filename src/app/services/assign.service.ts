import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Assign } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  momentjs:any = moment;
  private _assigns:Assign[] = [
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

  id:number = this._assigns.length+1;
  constructor() { }

  getAssigns(){
    return this._assigns;
  }

  getAssignById(id:number){
    return this._assigns.find(a=>a.id==id);
  }

  getAssignsByTaskId(taskId:number):Assign[]{
    return this._assigns.filter(a=>a.idTask == taskId);
  }

  getAssignsByPersonId(personId:number):Assign[]{
    return this._assigns.filter(a=>a.idPerson == personId);
  }

  deleteAssignById(id:number){
    this._assigns = this._assigns.filter(a=>a.id != id); 
  }

  addAssign(assingment:Assign){
    assingment.id = this.id++;
    this._assigns.push(assingment);
  }

  updateAssign(assignment:Assign){
    var _assign = this._assigns.find(a=>a.id==assignment.id);
    if(_assign){
      _assign.idTask = assignment.idTask;
      _assign.idPerson = assignment.idPerson;
      _assign.createdAt = assignment.createdAt;
      _assign.dateAndTime = assignment.dateAndTime;
    }
    
  }
}
