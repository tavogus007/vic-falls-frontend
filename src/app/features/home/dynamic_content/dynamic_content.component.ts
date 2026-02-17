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
}
