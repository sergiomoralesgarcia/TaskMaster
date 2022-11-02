import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Person } from 'src/app/models/person.model';
import { userPersonService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
})
export class PersonSelectableComponent implements OnInit {

  selectedPerson:Person=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private peopleSvc:userPersonService
  ) { }

  writeValue(obj: any): void {
    this.selectedPerson = this.peopleSvc.getPeopleById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getPeople(){
    return this.peopleSvc.getPeople();
  } 

  onPersonClicked(person:Person, accordion:IonAccordionGroup){
    this.selectedPerson = person;
    accordion.value='';
    this.propagateChange(this.selectedPerson.id);
  }

}
