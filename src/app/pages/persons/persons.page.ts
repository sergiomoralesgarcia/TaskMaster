import { Component } from '@angular/core';
import { userPersonService } from 'src/app/services/persons.service';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {
  constructor(private user:userPersonService,
    private alert:AlertController,
    private modal: ModalController,
    private personService:userPersonService) {}

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
  onDeletePerson(person){
    this.onDeleteAlert(person);
    
  }
}
