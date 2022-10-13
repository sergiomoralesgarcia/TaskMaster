import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';
import { PeopleComponentModule } from 'src/app/components/person/person.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeopleComponentModule,
    PersonsRoutingModule
  ],
  declarations: [PersonsPage]
})
export class PersonsPageModule {}