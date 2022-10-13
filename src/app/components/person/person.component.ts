import { Component, Input, OnInit } from '@angular/core';
import { Persons } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() people : Persons;
  
  constructor() { }

  ngOnInit() {}

}
