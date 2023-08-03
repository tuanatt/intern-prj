import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  constructor(private router: Router) {}


  onLinkClick(page: string) {
    switch (page) {
      case 'about':
        this.router.navigate(['/about-me']);
        break;
    }
  }
}
