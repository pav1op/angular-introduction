import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {

  person0: Person = {
    givenName: 'Pvl',
    surName: 'P',
    age: 2,
    email: 'p@aueb.gr',
    address: 'Athens, Grecce',
  };

  person1: Person = {
    givenName: 'Takis',
    surName: 'Tsoukalas',
    age: 63,
    email: 'takis7@aueb.gr',
    address: 'Antegeia, Grecce',
  }
}
