import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignPageRoutingModule } from './assign-routing.module';

import { AssignPage } from './assign.page';
import { AssigmentComponent } from 'src/app/components/assignment/assignment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignPageRoutingModule
  ],
  declarations: [AssignPage, AssigmentComponent]
})
export class AssignPageModule {}
