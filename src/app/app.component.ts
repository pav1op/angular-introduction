import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pavo';

  person ={
    givenName: 'Pvl',
    surName: 'P',
    age: 2,
    email: 'p@aueb.gr'
  }
}
