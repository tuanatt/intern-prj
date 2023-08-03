import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private router: Router) {}

  onLinkClick(page: string) {
    switch (page) {
      case 'report':
        this.router.navigate(['/report-page']);
        break;
    }
  }

}
