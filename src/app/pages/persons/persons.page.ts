import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PersonsService } from 'src/app/services/persons.service';
import { Persons } from '../models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage implements OnInit {

  people: Persons;

  constructor(private person: PersonsService ) {}

  ngOnInit() {
  }

  getPeople(): Persons[] {
    return this.person.getPeople();
  }

}
