import { Component } from '@angular/core';

@Component({
  selector: 'app-study-methods',
  templateUrl: './study-methods.component.html',
  styleUrl: './study-methods.component.css',
})
export class StudyMethodsComponent {
  chartData: any[] = [
    {
      name: 'Documentation',
      value: 20,
    },
    {
      name: 'Udemy',
      value: 25,
    },
    {
      name: 'Books',
      value: 15,
    },
    {
      name: 'ChatGPT',
      value: 15,
    },
    {
      name: 'Online Blogs',
      value: 5,
    },
    {
      name: 'YouTube',
      value: 20,
    },
    {
      name: 'FreeCodeCamp',
      value: 10,
    },
  ];
}
