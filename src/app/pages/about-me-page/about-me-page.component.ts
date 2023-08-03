import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements AfterViewInit {
  @ViewChild('typingText', { static: false }) typingTextRef!: ElementRef;
  typingText = "Hello! I am Tuana. I am an intern in H&R Block and in this website you can find everything I accomplished!\nSo I wanted to give some information about myself here so you can understand me better. I was born in 2002 in Turkey, Ankara, (which is the capital of Turkey).\nI have been living there ever since I came to Kansas City to play college tennis. I started playing tennis when I was 8 years old, so basically, I have been playing tennis my whole life. Tennis brought so much to my life as an experience. I learned discipline at a young age and had a strict lifestyle. I traveled a lot to go to tennis tournaments around the world, and this way, my English got better before coming to the USA. I wasn't thinking about playing college tennis until starting High School. With this decision, I started to prepare for it and started applying to schools with my tennis video with the help of an agency.\nCame to the USA in 2020; it was the end of the COVID year, so it was an interesting start to a college experience. First, I was majoring in computer science, but at the end of my sophomore year, I thought IT was going to be a better fit. Then I switched to IT with a Business Minor, and I have been enjoying it more. In IT, I think I can fit into many more fields and express my own authentic self better.";
  images: string[] = ["/assets/aboutme-tennis.jpg", "/assets/aboutme-tennis01.jpg", "/assets/aboutme-tennis02.jpg", "/assets/aboutme-04.jpg", "/assets/aboutme-05.jpg"];
  imgIndex=0;
  currentIndex = 0;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.typeText();
  }

  showNextImage() {
    this.imgIndex = (this.imgIndex + 1) % this.images.length;
  }

  onNextButtonClick() {
    this.showNextImage();
  }

  typeText() {
    const typingTextElement: HTMLElement = this.typingTextRef.nativeElement;

    if (this.currentIndex < this.typingText.length) {
      this.renderer.setProperty(typingTextElement, 'textContent', this.typingText.substr(0, this.currentIndex + 1));
      this.currentIndex++;
      setTimeout(() => this.typeText(), 5);
    }
  }
}
