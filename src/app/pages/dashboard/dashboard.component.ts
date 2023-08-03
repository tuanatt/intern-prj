import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showIframe = false;

  toggleIframe() {
    this.showIframe = !this.showIframe;
  }

  constructor(private router: Router) {}

  onLinkClick(page: string) {
    switch (page) {
      case 'part-1':
        this.router.navigate(['/first-week']);
        break;
      case 'part-2':
        this.router.navigate(['/second-week']);
        break;  
    }
  }
  
}
