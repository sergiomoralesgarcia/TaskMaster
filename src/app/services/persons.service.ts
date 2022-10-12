import { Injectable } from '@angular/core';
import { Persons } from '../pages/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  public people: Persons[] = [
    {
      id: 0,
      name: 'Rodri',
      nickname: 'Cordobés',
      image: ''
    },
    {
      id: 1,
      name: 'Cueto',
      nickname: 'Friki',
      image: ''
    },
    {
      id: 2,
      name: 'Alberto',
      nickname: 'Parringson',
      image: ''
    },
    {
      id: 3,
      name: 'Álvaro',
      nickname: 'Rey',
      image: ''
    }
  ]
  constructor() { }

  getPeople(): Persons[] {
    return this.people;
  }

  getPeopleById(id: number): Persons{
    return this.people[id];
  }
}
