import { Component } from '@angular/core';
import { NavbarComponent }  from './core/navbar/navbar.component';
import { HomeComponent }  from './features/home/home.component';
import { CoreValuesComponent }  from './body/core-values/core-values.component';
import { FocusAreasComponent } from "./body/focus-areas/focus-areas.component";
import { ProdAndServComponent } from "./body/prod-and-serv/prod-and-serv.component";
import { FooterComponent } from "./body/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, HomeComponent, CoreValuesComponent, FocusAreasComponent, ProdAndServComponent, FooterComponent],
  templateUrl: './MainLayaoutComponent.html',
})
export class MainLayoutComponent {
    selectedSection: string = 'home';
  changeSection(section: string) {
    this.selectedSection = section;
  }
}
