import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  technologiesData: any = [
    {
      name: 'Vanilla Javascript',
      value: 65,
    },
    {
      name: 'HTML',
      value: 75,
    },
    {
      name: 'CSS',
      value: 75,
    },
    {
      name: 'Angular',
      value: 80,
    },
    {
      name: 'Tailwind',
      value: 90,
    },
    {
      name: 'Bootstrap',
      value: 10,
    },
  ];
}
