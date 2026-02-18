import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
@Component({
  selector: 'app-focus-areas',
  imports: [NgClass, NgFor],
  templateUrl: './focus-areas.component.html',
  styleUrl: './focus-areas.component.css'
})
export class FocusAreasComponent {
  areas = [
    {
      title: 'Education',
      image: 'assets/focus/logov3.png',
      description: 'Advancing access to quality education, research excellence, and knowledge exchange to empower future generations.'
    },
    {
      title: 'Climate',
      image: 'assets/focus/logov3.png',
      description: 'Promoting climate resilience, sustainability, and innovative environmental solutions across the region.'
    },
    {
      title: 'Governance',
      image: 'assets/focus/logov3.png',
      description: 'Strengthening transparent institutions, leadership development, and public policy innovation.'
    },
    {
      title: 'Law',
      image: 'assets/focus/logov3.png',
      description: 'Enhancing legal frameworks, justice systems, and rule of law through research and professional training.'
    }
  ];

}
