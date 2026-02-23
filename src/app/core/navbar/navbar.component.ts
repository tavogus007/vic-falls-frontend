import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-navbar',
  imports: [ NgClass ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoNormal = 'logov4.png';       
  logoScroll = 'logov2.png';
  scrolled = false;

  constructor(private contentService: ContentService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  selectSection(section: string) {
    this.contentService.changeSection(section);
    return false;
  }

}
