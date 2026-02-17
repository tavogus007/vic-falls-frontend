import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private currentSectionSource = new BehaviorSubject<string>('home');
  currentSection$ = this.currentSectionSource.asObservable();

  changeSection(section: string) {
     console.log('Cambiando sección a:', section);
    this.currentSectionSource.next(section);
  }
}
