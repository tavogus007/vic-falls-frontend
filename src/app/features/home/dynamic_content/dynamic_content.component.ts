import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  imports: [ CommonModule ],
  templateUrl: './dynamic_content.component.html',
  styleUrl: './dynamic_content.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class DynamicContentComponent {
  @Input() section: string = 'about';

  activeSection: 'why' | 'vision' | null = null;

  toggleSection(section: 'why' | 'vision'): void {
    this.activeSection = this.activeSection === section ? null : section;
  }

  
    goToSection(id: string, duration: number = 1200) {

    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 80;

    const startPosition = window.pageYOffset;
    const targetPosition =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(
        0,
        startPosition + (targetPosition - startPosition) * ease
      );

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
