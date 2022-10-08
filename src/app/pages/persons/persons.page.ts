import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage implements OnInit {

  constructor(public navCtrl: NavController) {}

  abrirHome() {
      this.navCtrl.navigateForward("home")
    }
  ngOnInit() {
  }

}
