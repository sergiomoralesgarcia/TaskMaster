import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { AssignmentDetailComponent } from './pages/assignment-detail/assignment-detail.component';
import { PersonSelectableComponent } from './components/person-selectable/person-selectable.component';
import { TaskSelectableComponent } from './components/task-selectable/task-selectable.component';
import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';
import { registerLocaleData } from '@angular/common';
// other imports here...
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//registerLocaleData(en);
//registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, PersonDetailComponent, TaskDetailComponent, AssignmentDetailComponent, PersonSelectableComponent, TaskSelectableComponent, DateTimeSelectableComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule, 
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader,
        useFactory: (createTranslateLoader), 
        deps: [HttpClient] 
      } 
    }) ,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  /*providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ]*/
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
