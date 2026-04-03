import { Routes } from '@angular/router';
import { NewsletterComponent } from './body/news/newsletter/newsletter.component';
import { MainLayoutComponent } from './MainLayoutComponent';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent },
  { path: 'newsletter', component: NewsletterComponent}
];
