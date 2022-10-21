import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assignment } from 'src/app/models/assigment.model';
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
export class AssigmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment:Assignment;
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
    var taskId = this.assignment.taskId;
    if(taskId)
      return this.tasksSvc.getTaskById(taskId);
    return undefined;
  }

  getPerson():Person{
    var personId = this.assignment.personId;
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
