import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class userPersonService {
  private _people:Person[] = [
    {
      id: 1,
      name: 'Diego Rodriguez',
      nickname: 'Cordobeh',
      age: 20,
      image: "https://drive.google.com/uc?export=view&id=1g56LqrevlhL7Os6n-e6rIztuWtuScJk9"
    },
    {
      id: 2,
      name: 'Alejandro Cueto',
      nickname: 'Friki',
      age: 19,
      image: "https://drive.google.com/uc?export=view&id=1hItKLZcDnmW_dlxEdCSw63opdT4YzILI"
    },
    {
      id: 3,
      name: 'Alberto Parra',
      nickname: 'Parringson',
      age: 18,
      image: "https://drive.google.com/uc?export=view&id=1oCzWNoF1yiDxgA09tzTvC9nEy1DS3Dev"
    },
    {
      id: 4,
      name: 'Álvaro Linero',
      nickname: 'ElRey',
      age: 19,
      image: "https://drive.google.com/uc?export=view&id=103p4Uf-nW5VW72qGXq37N9GRruRf1oxC"
    },
    {
      id: 5,
      name: 'David Antúnez',
      nickname: 'Fernando Alonso',
      age: 19,
      image: "https://drive.google.com/uc?export=view&id=1n8cnVuQSsdoZ5cjKc4fnua9tHZUhErVf"
    }
  ]

  id:number = this._people.length+1;
  constructor() { }

  getPeople(){
    return this._people;
  }
  
  getPeopleById(id:number){
    return this._people.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }

  addPerson(person:Person){
    person.id = this.id++;
    this._people.push(person);
  }

  updatePerson(person:Person){
    var _person = this._people.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.nickname = person.nickname;
      _person.age = person.age;
      _person.image = person.image;
    }
  }
}