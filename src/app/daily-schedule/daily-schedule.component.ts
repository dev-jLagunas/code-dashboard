import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrl: './daily-schedule.component.css',
})
export class DailyScheduleComponent {
  data: any[] = [
    {
      name: 'Coding',
      value: 7,
    },
    {
      name: 'Reading Docs',
      value: 1,
    },
    {
      name: 'YouTube Research',
      value: 1,
    },
    {
      name: 'Data Structures',
      value: 1,
    },
    {
      name: 'Algorithms',
      value: 1,
    },
    {
      name: 'CSS Styling',
      value: 1,
    },
  ];
}
