import { Component } from '@angular/core';
import { NgFor } from '@angular/common'
@Component({
  selector: 'app-newsletter',
  imports: [ NgFor ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

  title = 'Victoria Falls Newsletter';

   events = [
    {
      type: 'Conference',
      title: 'Annual Governance Forum 2026',
      date: 'April 15, 2026',
      location: 'La Paz, Bolivia',
      description: 'Our flagship annual forum bringing together policy experts, academics, and government officials to discuss governance innovation and institutional development.'
    },
    {
      type: 'Workshop',
      title: 'Youth Leadership Workshop',
      date: 'May 3, 2026',
      location: 'Online',
      description: 'A hands-on session designed for young leaders to build skills in public administration, civic engagement, and community advocacy.'
    },
    {
      type: 'Seminar',
      title: 'Environmental Policy Seminars',
      date: 'June 20, 2026',
      location: 'Santa Cruz, Bolivia',
      description: 'An in-depth seminar addressing current environmental legislation, climate resilience strategies, and sustainable development goals in the region.'
    }
  ];
}
