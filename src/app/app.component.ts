import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  isSmallScreen: boolean = window.innerWidth <= 640;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isSmallScreen = window.innerWidth <= 640;
  }

  scroll(direction: 'left' | 'right'): void {
    if (this.isSmallScreen) {
      const container: HTMLElement = this.scrollContainer.nativeElement;
      const scrollAmount: number = window.innerWidth;

      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
      }
    }
  }
}
