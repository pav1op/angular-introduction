import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './crud-dashboard-example.component.html',
  styleUrl: './crud-dashboard-example.component.css',
})
export class CrudDashboardComponent {}
