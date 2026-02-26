import { Component } from '@angular/core';
import { NavbarComponent }  from './core/navbar/navbar.component';
import { HomeComponent }  from './features/home/home.component';
import { CoreValuesComponent }  from './body/core-values/core-values.component';
import { FocusAreasComponent } from "./body/focus-areas/focus-areas.component";
import { ProdAndServComponent } from "./body/prod-and-serv/prod-and-serv.component";
import { NewsComponent } from "./body/news/news.component";
import { FooterComponent } from "./body/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, CoreValuesComponent, FocusAreasComponent, ProdAndServComponent , NewsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    selectedSection: string = 'home';
  changeSection(section: string) {
    this.selectedSection = section;
  }
}
