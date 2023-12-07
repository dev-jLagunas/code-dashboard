import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
})
export class CertificationsComponent {
  heatMapData: any[] = [
    {
      name: '1-3',
      series: [
        {
          name: 'Udemy - Jonas Schmedtmann',
          value: 'The Complete Javascript Course',
        },
        {
          name: 'Udemy - Kurt Anderson',
          value: 'Computer Scienece 101: Master the theory behind programming',
        },
        {
          name: 'FreeCodeCamp',
          value: 'Responsive Web Design',
        },
        {
          name: 'FreeCodeCamp 2',
          value: 'Javascript Algorithms and Data Structures',
        },
        {
          name: 'SoloLearn',
          value: 'Web Development',
        },
      ],
    },
    {
      name: '4-6',
      series: [
        {
          name: 'SoloLearn 2',
          value: 'Front-end for Beginners',
        },
        {
          name: 'Udemy - Angela Yu',
          value: 'The complete 2023 Web Development Bootcamp',
        },
        {
          name: 'Udemy - Colt Steele',
          value: 'Javascript Algorithms and Data Structures Masterclass',
        },
        {
          name: 'Udemy - John Smilga',
          value: 'Javascript Turorial and Projects Course',
        },
        {
          name: 'Udemy - Vishwas Gopinath',
          value: 'Angular - Mastering the Basics',
        },
      ],
    },
    {
      name: '7-9',
      series: [
        {
          name: 'Youtube - Dave Gray',
          value: 'Complete HTML and CSS Course',
        },
        {
          name: 'Udemy - Maximilian Schwarzmüller',
          value: 'Angular - The Complete Guide',
        },
        {
          name: 'Harvard - David J. Malan',
          value: 'Havarad CS50 - Full Computer Science Course',
        },
        {
          name: 'YouTube - procademy',
          value: 'Complete Angular 13 Course Step by Step',
        },
      ],
    },
    {
      name: '10-Now',
      series: [
        {
          name: 'Udemy - Dylan Israel',
          value: '100 Angular Challenge',
        },
        {
          name: 'Youtube - Santosh Yadav',
          value: 'Angular for Beginners Course',
        },
        {
          name: 'Youtube - Codevolution',
          value: 'Javascript Algorithms and Data Structures',
        },
        {
          name: 'SoloLearn 3',
          value: 'Angular',
        },
      ],
    },
  ];
}
