import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-skill-progression',
  templateUrl: './skill-progression.component.html',
  styleUrl: './skill-progression.component.css',
})
export class SkillProgressionComponent {
  chartData: any[] = [
    {
      name: '1st half',
      series: [
        {
          name: 'Problem Solving',
          value: 2,
        },
        {
          name: 'Adaptability',
          value: 1,
        },
        {
          name: 'Attention to Detail',
          value: 1,
        },
        {
          name: 'Self-Motivation',
          value: 6,
        },
        {
          name: 'User-Centric Mindset',
          value: 2,
        },
      ],
    },

    {
      name: '2nd half',
      series: [
        {
          name: 'Problem Solving',
          value: 6,
        },
        {
          name: 'Adaptability',
          value: 8,
        },
        {
          name: 'Attention to Detail',
          value: 7,
        },
        {
          name: 'Self-Motivation',
          value: 10,
        },
        {
          name: 'User-Centric Mindset',
          value: 6,
        },
      ],
    },
  ];

  legendPosition: LegendPosition = LegendPosition.Below;
}
