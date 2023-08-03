import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  constructor(private router: Router) {}

  onLinkClick(page: string) {
    switch (page) {
      case 'presentation':
        this.router.navigate(['/oneslider']);
        break;
    }
  }
}
