import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TasksService } from '../../services/tasks.service';
import { AssignmentService } from 'src/app/services/assign.service';
import { userPersonService } from 'src/app/services/persons.service';
import { Assign } from 'src/app/models/assignment.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('assign') set assignment(assignment:Assign){
    if(assignment){
      this.form.controls.id.setValue(assignment.id);
      this.form.controls.idTask.setValue(assignment.idTask);
      this.form.controls.idPerson.setValue(assignment.idPerson);
      this.form.controls.dateAndTime.setValue(assignment.dateAndTime);
      this.mode = "Edit";
    }
  }
  
  constructor(
    private tasksSvc:TasksService,
    private peopleSvc:userPersonService,
    private assignmentsSvc:AssignmentService,
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      idTask:[-1, [Validators.min(1)]],
      idPerson:[-1, [Validators.min(1)]],
      dateAndTime:['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateAndTime){
    this.form.controls.dateAndTime.setValue(dateAndTime);
  }

}

