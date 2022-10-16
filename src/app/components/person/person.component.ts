import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persons } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() people : Persons;
  
  
  constructor() { }

  ngOnInit() {}

  onEditClick(){
    this.onEdit.emit(this.people);
  }

  onDeleteClick(){
    this.onDelete.emit(this.people);
  }
}
