import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Persons } from 'src/app/models/person.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('person') set person(person:Persons){
    if(person){
      this.form.controls.id.setValue(person.id);
      this.form.controls.name.setValue(person.name);
      this.form.controls.nickname.setValue(person.nickname);
      this.form.controls.age.setValue(person.age);
      this.form.controls.picture.setValue(person.image);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      nickname:['', [Validators.required]],
      picture:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({person: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
