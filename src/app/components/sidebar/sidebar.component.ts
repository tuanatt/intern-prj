import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  onLinkClick(page: string) {
    switch (page) {
      case 'home':
        this.router.navigate(['']);
        break;
      case 'about':
        this.router.navigate(['/about-me']);
        break;
      case 'lockbit-history':
        this.router.navigate(['/chocolate']);
        break;
      case 'part-1':
        this.router.navigate(['/first-week']);
        break;
      case 'part-2':
        this.router.navigate(['/second-week']);
        break;  
    }
  }
}
