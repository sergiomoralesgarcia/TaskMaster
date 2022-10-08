import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonsPageRoutingModule
  ],
  declarations: [PersonsPage]
})
export class PersonsPageModule {
  constructor(public navCtrl: NavController) {}

  abrirHome() {
      this.navCtrl.navigateForward("Home")
    }
}
