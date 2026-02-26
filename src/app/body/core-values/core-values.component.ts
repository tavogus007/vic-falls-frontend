import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-core-values',
  imports: [NgFor],
  templateUrl: './core-values.component.html',
  styleUrl: './core-values.component.css'
})
export class CoreValuesComponent {
  values = [
    { title: 'Integrity', icon: 'bi bi-shield-check' },
    { title: 'Accountability', icon: 'bi bi-clipboard-check' },
    { title: 'Resilience', icon: 'bi bi-arrow-repeat' },
    { title: 'Phronesis', icon: 'bi bi-lightbulb' },
    { title: 'Humanity', icon: 'bi bi-people' },
    { title: 'Interconnectedness', icon: 'bi bi-diagram-3' },
    { title: 'Respect for Nature', icon: 'bi bi-tree' }
  ];
}
