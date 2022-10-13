import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userPersonService } from 'src/app/services/persons.service';
import { Persons } from 'src/app/models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {

  person:Persons[]; 

  constructor(private user:userPersonService ) {}

  ngOnInit() {
  }

  getPeople(){ 
    return this.user.getPeople(); 
  }

}
