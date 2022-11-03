import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assign } from 'src/app/models/assignment.model';
import { Person } from 'src/app/models/person.model';
import { Task } from 'src/app/models/task.model';
import { AssignmentService } from 'src/app/services/assign.service';
import { userPersonService } from 'src/app/services/persons.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment:Assign;

  //isLowResolution = lowres;
  constructor(
    private peopleSvc:userPersonService,
    private tasksSvc:TasksService,
    private assignmentsSvc:AssignmentService
  ){

  }

  ngOnInit(
  ) {

  }

  getTask():Task{
    var idTask = this.assignment.idTask;
    if(idTask)
      return this.tasksSvc.getTaskById(idTask);
    return undefined;
  }

  getPerson():Person{
    console.log(new Date().toISOString());
    var personId = this.assignment.idPerson;
    if(personId)
      return this.peopleSvc.getPeopleById(personId);
    return undefined;
  }

  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }
}
