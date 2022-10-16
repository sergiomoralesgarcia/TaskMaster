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

  id:number = this.person.length+1;
  constructor() { }

  getPeople(): Persons[]{
    return this.person;
  }
  
  getPeopleById(id:number): Persons{
    return this.person.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this.person = this.person.filter(p=>p.id != id); 
  }

  addPerson(person:Persons){
    person.id = this.id++;
    this.person.push(person);
  }

  updatePerson(person:Persons){
    var _person = this.person.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.nickname = person.nickname;
      _person.age = person.age;
      _person.image = person.image;
    }
    
  }
}