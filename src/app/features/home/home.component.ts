import { AfterViewInit ,Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('bgVideo') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch(err => {
      console.log('Autoplay bloqueado:', err);
    });
  }

}
