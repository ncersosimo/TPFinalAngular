import { Component } from '@angular/core';
import { GoBackComponent } from "../go-back/go-back.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [GoBackComponent],
  template: `
    <h2>Page Not Found</h2>
    <p>We couldn't find that page! Maybe on Cybertron.</p>
    <app-go-back/>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
}
