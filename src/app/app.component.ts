import { Component } from '@angular/core';
import { NavbarComponent }  from './core/navbar/navbar.component';
import { HomeComponent }  from './features/home/home.component';
import { CoreValuesComponent }  from './body/core-values/core-values.component';
import { FocusAreasComponent } from "./body/focus-areas/focus-areas.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, CoreValuesComponent, FocusAreasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    selectedSection: string = 'home';
  changeSection(section: string) {
    this.selectedSection = section;
  }
}
