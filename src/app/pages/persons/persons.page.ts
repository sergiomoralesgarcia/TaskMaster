import { Component } from '@angular/core';
import { userPersonService } from 'src/app/services/persons.service';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { Person } from 'src/app/models/person.model';
import { Assignment } from 'src/app/models/assigment.model';
import { AssignmentService } from 'src/app/services/assign.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {
  constructor(private user:userPersonService,
    private alert:AlertController,
    private modal: ModalController,
    private personService:userPersonService,
    private assignmentsSvc:AssignmentService) {}

  ngOnInit() {
  }

  getPeople(){ 
    return this.user.getPeople(); 
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create ({
      component:PersonDetailComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.personService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personService.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  
  onNewPerson(){
    this.presentPersonForm(null);
    
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
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
            this.personService.deletePersonById(person.id);
          },
        },
      ],
    });
    await alert.present();

  }

  async onPersonExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar la persona porque está asignada a una tarea',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeletePerson(person){
    if(!this.assignmentsSvc.getAssignmentsByPersonId(person.id).length)
      this.onDeleteAlert(person);
    else
      this.onPersonExistsAlert(person);
  
    
  }
}
