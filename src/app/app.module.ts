import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { AssignmentDetailComponent } from './pages/assignment-detail/assignment-detail.component';

@NgModule({
  declarations: [AppComponent, PersonDetailComponent, TaskDetailComponent, AssignmentDetailComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
