import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Person } from 'src/app/models/person.model';
import { userPersonService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonSelectableComponent),
      multi: true
    }
  ]
})
export class PersonSelectableComponent implements OnInit, ControlValueAccessor {

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
