import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage implements OnInit {

  people: Person;

  constructor(private person: PersonsService ) {}

  ngOnInit() {
  }

  getPeople(): Person[] {
    return this.person.getPeople();
  }

}
