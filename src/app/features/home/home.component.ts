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
  'assets/videos/vidbg1_m.mp4',
  'assets/videos/vidbg2_m.mp4',
  'assets/videos/vidbg3_m.mp4'
];

videoSrcA = this.videos[0];
videoSrcB = this.videos[1];
currentVideo = this.videos[0];

switchVideo() {
  this.currentIndex = (this.currentIndex + 1) % this.videos.length;

  if (this.activeVideo === 'A') {
    this.activeVideo = 'B';
    const videoB = this.videoBRef.nativeElement;
    videoB.muted = true;
    videoB.src = this.videos[this.currentIndex];
    videoB.load();
    videoB.addEventListener('canplay', () => {
      videoB.play().catch(err => console.warn('Error video B:', err));
    }, { once: true });

  } else {
    this.activeVideo = 'A';
    const videoA = this.videoARef.nativeElement;
    videoA.muted = true;
    videoA.src = this.videos[this.currentIndex];
    videoA.load();
    videoA.addEventListener('canplay', () => {
      videoA.play().catch(err => console.warn('Error video A:', err));
    }, { once: true });
  }
}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
  const videoA = this.videoARef.nativeElement;
  const videoB = this.videoBRef.nativeElement;

  videoA.muted = true;
  videoB.muted = true;

  videoA.src = this.videos[0];
  videoA.load();

  videoA.addEventListener('canplay', () => {
    videoA.play().catch(err => console.warn('Error:', err));
  }, { once: true });
}

}
