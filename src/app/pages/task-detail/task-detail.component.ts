import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {

  form: FormGroup;
  mode: "New" | "Edit" = "New";
  @Input('tasks') set task(task: Task) {
    if (task) {
      this.form.controls.id.setValue(task.id);
      this.form.controls.name.setValue(task.name);
      this.form.controls.description.setValue(task.description);
      this.form.controls.timeInSeconds.setValue(task.timeInSeconds);
      this.form.controls.image.setValue(task.image);
      this.mode = "Edit";
    }
  }


  constructor(
    private fb: FormBuilder,
    private modal: ModalController) {
    this.form = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      timeInSeconds: ['', [Validators.required]],
      image: ['']
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.modal.dismiss({task: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss() {
    this.modal.dismiss(null, 'cancel');
  }

}


