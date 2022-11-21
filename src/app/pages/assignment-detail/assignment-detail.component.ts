import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assign } from 'src/app/models/assignment.model';
import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { userPersonService } from 'src/app/services/persons.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  form: FormGroup;
  mode: "New" | "Edit" = "New";
  @Input('assign') set assignment(assign: Assign) {
    if (assign) {
      this.form.controls.id.setValue(assign.id);
      this.form.controls.idTask.setValue(assign.idTask);
      this.form.controls.idPerson.setValue(assign.idPerson);
      this.form.controls.dateAndTime.setValue(assign.dateAndTime);
      this.mode = "Edit";
    }
  }

  constructor(
    private fb: FormBuilder,
    private modal: ModalController,
    private taskSVC:TasksService,
    private userSVC:userPersonService,
    private translateService: TranslateService
  ) {
    this.form = this.fb.group({
      id: [null],
      idTask: [0, [Validators.min(1)]],
      idPerson: [0, [Validators.min(1)]],
      dateAndTime: ['', [Validators.required]],
    });
  }

  language: string = this.translateService.currentLang;

  languageChange() {  
    this.translateService.use(this.language);  
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime){
    this.form.controls.dateTime.setValue(dateTime);
  }

  getPeople(){
    return this.userSVC.getPeople();
  }

  getTasks(){
    return this.taskSVC.getTask();
  }

  onChange(event){
    this.form.controls.dateTime.setValue(event.detail.value);
  }

}
