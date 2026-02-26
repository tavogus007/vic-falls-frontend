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
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{

    constructor(private contentService: ContentService) {
    this.subscription = this.contentService.currentSection$.subscribe(section => {
      this.currentSection = section;
    });
  }

  private subscription: Subscription;

  currentSection: string = 'home';
  currentIndex = 0;
  activeVideo: 'A' | 'B' = 'A';

  @ViewChild('videoA') videoARef!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoB') videoBRef!: ElementRef<HTMLVideoElement>;
  

  isFading: boolean = false;
  
  
videos: string[] = [
  'assets/videos/vidbg1.mp4',
  'assets/videos/vidbg2.mp4',
  'assets/videos/vidbg3.mp4'
];

videoSrcA = this.videos[0];
videoSrcB = this.videos[1];
currentVideo = this.videos[0];

switchVideo() {

  this.currentIndex = (this.currentIndex + 1) % this.videos.length;

  if (this.activeVideo === 'A') {
    this.videoSrcB = this.videos[this.currentIndex];
    this.activeVideo = 'B';
  } else {
    this.videoSrcA = this.videos[this.currentIndex];
    this.activeVideo = 'A';
  }
}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
  this.videoARef.nativeElement.load();
  this.videoBRef.nativeElement.load();
}

}
