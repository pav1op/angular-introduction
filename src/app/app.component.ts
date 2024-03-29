import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pavo';

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
  };

  
}
