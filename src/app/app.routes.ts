import { Routes } from '@angular/router';
import { NewsletterComponent } from './body/news/newsletter/newsletter.component';
import { MainLayoutComponent } from './MainLayoutComponent';
import { NewsComponent } from './body/news/news.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent },
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'news', component: NewsComponent}
];
