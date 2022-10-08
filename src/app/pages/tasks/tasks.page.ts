import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(public navCtrl: NavController) {}

  abrirHome() {
      this.navCtrl.navigateForward("home")
    }

  ngOnInit() {
  }

}
