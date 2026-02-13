import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ NgClass ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

}
