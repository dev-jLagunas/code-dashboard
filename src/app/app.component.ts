import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[] = [
    {
      name: 'Sleep',
      value: 8940000,
    },
    {
      name: 'Code',
      value: 5000000,
    },
  ];
  view: any[] = [700, 400];
  legendPosition: LegendPosition = LegendPosition.Below;
}
