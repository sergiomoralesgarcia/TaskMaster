import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule } from '@ionic/angular';


import { PeopleComponentModule } from 'src/app/components/person/person.module';
import { HttpClient } from '@angular/common/http';
import { PersonsRoutingModule } from '../persons/persons-routing.module';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeopleComponentModule,
    PersonsRoutingModule,
    TranslateModule.forChild({
        loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
        }
    })
    ]
})
export class TaskDetailModule {}