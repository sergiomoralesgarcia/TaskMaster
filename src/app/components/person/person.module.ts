import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonComponent } from './person.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
    declarations: [PersonComponent],
    exports: [PersonComponent]
})

export class PeopleComponentModule {}