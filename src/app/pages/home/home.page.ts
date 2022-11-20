import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core'; 
import MojsPlayer from '@mojs/player';
import mojs from '@mojs/core'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private translateService: TranslateService) {}
  
  language: string = this.translateService.currentLang;

  languageChange() {  
    this.translateService.use(this.language);  
  }

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
