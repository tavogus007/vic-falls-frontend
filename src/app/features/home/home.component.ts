import { AfterViewInit ,Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';
import { DynamicContentComponent } from './dynamic_content/dynamic_content.component';

@Component({
  selector: 'app-home',
  imports: [ DynamicContentComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy{
  @ViewChild('bgVideo') videoRef!: ElementRef<HTMLVideoElement>;

  currentSection: string = 'home';
  private subscription: Subscription;

  constructor(private contentService: ContentService) {
    this.subscription = this.contentService.currentSection$.subscribe(section => {
      this.currentSection = section;
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch(err => {
      console.log('Autoplay bloqueado:', err);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
