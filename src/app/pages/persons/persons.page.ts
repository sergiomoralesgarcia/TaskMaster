import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userPersonService } from 'src/app/services/persons.service';
import { Persons } from 'src/app/models/person.model';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {

  person:Persons[]; 
  private alert:AlertController
  private modal:ModalController
  private peopleSvc:userPersonService
  constructor(private user:userPersonService ) {}

  ngOnInit() {
  }

  getPeople(){ 
    return this.user.getPeople(); 
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
