import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userPersonService } from 'src/app/services/persons.service';
import { Persons } from 'src/app/models/person.model';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {

  //person:Persons[]; 
  private alert:AlertController
  private modal:ModalController
  private peopleSvc:userPersonService
  constructor(private user:userPersonService ) {}

  ngOnInit() {
  }

  getPeople(){ 
    return this.user.getPeople(); 
  }

  async presentPersonForm(person:Persons){
    const modal = await this.modal.create({
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
            this.peopleSvc.addPerson(result.data.person);
            break;
          case 'Edit':
            this.peopleSvc.updatePerson(result.data.person);
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

  async onDeleteAlert(people){
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
            this.peopleSvc.deletePersonById(people.id);
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  onDeletePerson(people){
    this.onDeleteAlert(people);
    
  }
}
