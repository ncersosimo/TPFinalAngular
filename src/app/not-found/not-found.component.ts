import { Component } from '@angular/core';
import { GoBackComponent } from "../go-back/go-back.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [GoBackComponent],
  template: `
  <div class="container d-flex align-items-center justify-content-center mt-3">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="display-4">Page Not Found</h2>
        <p class="lead">We couldn't find that page! Maybe on Cybertron.</p>
      </div>
    </div>
  </div>
    <app-go-back/>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
}
