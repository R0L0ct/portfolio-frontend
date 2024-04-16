import { Component } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';

@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './cybersecurity.component.html',
  styleUrl: './cybersecurity.component.css',
})
export class CybersecurityComponent {}
