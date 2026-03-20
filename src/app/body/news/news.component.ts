import { AfterViewInit, Component, NgZone } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';

declare var bootstrap: any;
@Component({
  selector: 'app-news',
  imports: [NgFor, NewsletterComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements AfterViewInit {

    constructor(private ngZone: NgZone, private router: Router) {}

  activeIndex = 0;

  news = [
    {
      image: 'assets/news/news1.png',
      title: 'Regional Policy Dialogue 2026',
      date: 'February 2026',
      description: 'Leaders and researchers gathered to discuss strategic regional development frameworks and governance innovation.'
    },
    {
      image: 'assets/news/news2.png',
      title: 'Climate Resilience Workshop',
      date: 'January 2026',
      description: 'Experts shared best practices in sustainability, environmental governance, and climate adaptation strategies.'
    },
    {
      image: 'assets/news/news3.png',
      title: 'Law and Governance Conference',
      date: 'December 2025',
      description: 'A high-level conference addressing justice systems, institutional strengthening and rule of law.'
    }
  ];

  ngAfterViewInit() {
    const carouselElement = document.getElementById('newsCarousel');

    carouselElement?.addEventListener('slid.bs.carousel', (event: any) => {
      this.ngZone.run(() => {
        this.activeIndex = event.to;
      });
    });
  }

  openNewsletter() {
    const modalEl = document.getElementById('newsletterModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}
