import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-focus-areas',
  imports: [ NgFor],
  templateUrl: './focus-areas.component.html',
  styleUrl: './focus-areas.component.css'
})
export class FocusAreasComponent {
  areas = [
    {
      title: 'Education',
      image: 'assets/focus/pic1.jpg',
      description: 'Advancing access to quality education, research excellence, and knowledge exchange to empower future generations.'
    },
    {
      title: 'Climate',
      image: 'assets/focus/pic2.jpg',
      description: 'Promoting climate resilience, sustainability, and innovative environmental solutions across the region.'
    },
    {
      title: 'Governance',
      image: 'assets/focus/pic3.jpg',
      description: 'Strengthening transparent institutions, leadership development, and public policy innovation.'
    },
    {
      title: 'Law',
      image: 'assets/focus/pic4.jpg',
      description: 'Enhancing legal frameworks, justice systems, and rule of law through research and professional training.'
    }
  ];

}
