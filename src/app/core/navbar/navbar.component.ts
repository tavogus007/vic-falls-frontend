import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { Collapse } from 'bootstrap';
@Component({
  selector: 'app-navbar',
  imports: [ NgClass ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  logoNormal = 'logov4.png';       
  logoScroll = 'logov2.png';
  scrolled = false;
  isMenuOpen = false;

  constructor(private contentService: ContentService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  selectSection(section: string) {
    if (section === 'home') {
      this.smoothScrollToTop(600);
    }
    this.contentService.changeSection(section);
    this.closeNavbar();
    return false;
  }

  private smoothScrollToTop(duration: number) {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      window.scrollTo(0, startPosition * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }

  private closeNavbar() {
    if (this.navbarCollapse?.nativeElement.classList.contains('show')) {
      const collapse = Collapse.getInstance(this.navbarCollapse.nativeElement);
      if (collapse) {
        collapse.hide();
      } else {
        new Collapse(this.navbarCollapse.nativeElement).hide();
      }
    }
  }

  toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}


}
