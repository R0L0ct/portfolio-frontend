import { Component } from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    HlmCaptionComponent,
    HlmTableComponent,
    HlmTdComponent,
    HlmThComponent,
    HlmTrowComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  protected machines = [
    {
      machine: 'SickOs',
      platform: 'Vulnhub',
      difficulty: 'Intermedio',
    },
    {
      machine: 'Future',
      platform: 'Vulnyx',
      difficulty: 'Intermedio',
    },
    {
      machine: 'Venom',
      platform: 'Vulnhub',
      difficulty: 'Intermedio',
    },
  ];
}
