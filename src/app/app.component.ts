import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [ BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    selectedSection: string = 'home';
  changeSection(section: string) {
    this.selectedSection = section;
  }
}
