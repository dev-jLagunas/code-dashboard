import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  daysStudied: number = 0;
  projectsCompleted: number = 0;
  cupsOfCoffee: number = 0;
  mentalBreakdowns: number = 0;

  daysStudiedCounter: any = setInterval(() => {
    this.daysStudied++;
    if (this.daysStudied === 418) {
      clearInterval(this.daysStudiedCounter);
    }
  }, 10);

  projectsCompletedCounter: any = setInterval(() => {
    this.projectsCompleted++;
    if (this.projectsCompleted === 65) {
      clearInterval(this.projectsCompletedCounter);
    }
  }, 70);

  cupsOfCoffeeCounter: any = setInterval(() => {
    this.cupsOfCoffee++;
    if (this.cupsOfCoffee === 836) {
      clearInterval(this.cupsOfCoffeeCounter);
    }
  }, 5);

  mentalBreakdownsCounter: any = setInterval(() => {
    this.mentalBreakdowns++;
    if (this.mentalBreakdowns == 10) {
      clearInterval(this.mentalBreakdownsCounter);
    }
  }, 400);
}
