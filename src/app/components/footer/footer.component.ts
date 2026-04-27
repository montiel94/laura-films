import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly igUrl = 'https://www.instagram.com/laurafilms__';
  readonly year = new Date().getFullYear();
}
