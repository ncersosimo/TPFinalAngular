import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  standalone: true,
  imports: [],
  template: `
  <div class="d-flex justify-content-center mt-4">
    <button class="btn btn-outline-warning rounded" (click)="back()">Go Back!</button>
  </div>   
  `,
  styleUrl: './go-back.component.css'
})
export class GoBackComponent {
  constructor(private location: Location){}
  back(){
    this.location.back();
  }

}
