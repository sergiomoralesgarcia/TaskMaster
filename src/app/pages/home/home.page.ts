import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {}

  abrirPersons() {
      this.navCtrl.navigateForward("persons")
    }

  abrirAssign() {
    this.navCtrl.navigateForward("assign")
  }

  abrirTasks() {
    this.navCtrl.navigateForward("tasks")
  }
}
