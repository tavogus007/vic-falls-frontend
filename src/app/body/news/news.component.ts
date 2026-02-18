import { AfterViewInit, Component } from '@angular/core';
import { NgFor } from '@angular/common';

declare var bootstrap: any;
@Component({
  selector: 'app-news',
  imports: [NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements AfterViewInit {
  activeIndex = 0;

  news = [
    {
      image: 'assets/news/logo2.png',
      title: 'Regional Policy Dialogue 2026',
      date: 'February 2026',
      description: 'Leaders and researchers gathered to discuss strategic regional development frameworks and governance innovation.'
    },
    {
      image: 'assets/news/logo2.png',
      title: 'Climate Resilience Workshop',
      date: 'January 2026',
      description: 'Experts shared best practices in sustainability, environmental governance, and climate adaptation strategies.'
    },
    {
      image: 'assets/news/logo2.png',
      title: 'Law and Governance Conference',
      date: 'December 2025',
      description: 'A high-level conference addressing justice systems, institutional strengthening and rule of law.'
    }
  ];

  ngAfterViewInit() {
    const carouselElement = document.getElementById('newsCarousel');

    const carousel = new bootstrap.Carousel(carouselElement);

    carouselElement?.addEventListener('slid.bs.carousel', (event: any) => {
      this.activeIndex = event.to;
    });
  }

  onReadMore(item: any) {
    console.log('Future navigation to full article:', item.title);
  }
}
