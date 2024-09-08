import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TransformersListComponent } from './transformers-list/transformers-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TransformersListComponent,
],
  template: `
  <main class="main">
    <h1>{{title}}</h1>
    <div class="content">
      <header>
        <nav>
          <a class="button" 
          routerLink=""ariaCurrentWhenActive="page">Home</a> | 
          <a class="button" 
          routerLink="/transformers-list" routerLinkActive="activeButton"
          ariaCurrentWhenActive="page">Characters</a>
        </nav>
      </header>
    </div>
  </main>
  <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Transformers';
}
