import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Assign } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assign.service';
import { AssignmentDetailComponent } from '../assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {

  constructor(
    private assignmentsSvc:AssignmentService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getAssignments(){
    return this.assignmentsSvc.getAssigns();
  }

  async presentAssignForm(assignment:Assign){
    const modal = await this.modal.create({
      component:AssignmentDetailComponent,
      componentProps:{
        person:assignment
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignmentsSvc.addAssign(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentsSvc.updateAssign(result.data.assignment);
            break;
          default:
        }
      }
    });
  }

  onEditAssign(assignment){
    this.presentAssignForm(assignment);
  }

  async onDeleteAlert(assignment){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar la asignación de tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.assignmentsSvc.deleteAssignById(assignment.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteAssign(assignment){
    this.onDeleteAlert(assignment);
    
  }

  onNewAssign(){
    this.presentAssignForm(null);
    
  }

}
