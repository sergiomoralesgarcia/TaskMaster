import { Injectable } from '@angular/core';
import { Persons } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class userPersonService {
  person:Persons[] = [
    {
      id: 0,
      name: 'Diego Rodriguez',
      nickname: 'Cordobeh',
      age: 20,
      image: ''
    },
    {
      id: 1,
      name: 'Alejandro Cueto',
      nickname: 'Friki',
      age: 19,
      image: ''
    },
    {
      id: 2,
      name: 'Alberto Parra',
      nickname: 'Parringson',
      age: 18,
      image: ''
    },
    {
      id: 3,
      name: 'Álvaro Linero',
      nickname: 'ElRey',
      age: 19,
      image: ''
    },
    {
      id: 4,
      name: 'David Antúnez',
      nickname: 'Fernando Alonso',
      age: 19,
      image: ''
    }
  ]
  constructor() { }

  getPeople(): Persons[]{
    return this.person;
  }
  
  public getPeopleById(id:number): Persons{
    return this.person[id];
  }
}