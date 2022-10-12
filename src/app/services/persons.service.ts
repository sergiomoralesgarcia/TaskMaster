import { Injectable } from '@angular/core';
import { Person } from '../pages/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  
  public people: Person[] = [
    {
      id: 0,
      name: 'María',
      surname: 'García',
      image: ''
    },
    {
      id: 1,
      name: 'Estefanía',
      surname: 'Jiménez',
      image: ''
    },
    {
      id: 2,
      name: 'Antonio',
      surname: 'Pérez',
      image: ''
    },
    {
      id: 3,
      name: 'Andrés',
      surname: 'Ramírez',
      image: ''
    },
    {
      id: 4,
      name: 'Rosalía',
      surname: 'Escobar',
      image: ''
    },
  ]
  constructor() { }

  public getPeople(): Person[] {
    return this.people;
  }

  public getPeopleById(id: number): Person{
    return this.people[id];
  }
}
