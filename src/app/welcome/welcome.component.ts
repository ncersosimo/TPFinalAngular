import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoBackComponent } from "../go-back/go-back.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ReactiveFormsModule, GoBackComponent],
  template: `
  <div class="container mt-5">
    <div class="row justify-content-center">
      <form
       class="col-md-8 col-lg-6"
       [formGroup]="visitForm"
       (submit)="handleSubmit()"
      >
        <fieldset class="bg-secondary text-white p-3">
          <legend>Add your comment</legend> 
          <div class="mb-3">          
            <label for="name" class="form-label">Name</label>
            <input
            type="text"
            class="form-control"
            id="name"
            formControlName="name"
            placeholder="Paul, George..."
            autocomplete="name"
            >
          </div>
          <div
           class="alert alert-danger"
           [hidden]="name.valid || name.untouched">
            Name is required
          </div>
          <div class="mb-3">          
            <label for="email" class="form-label">Email</label>
            <input
            type="email"
            class="form-control"
            id="email"
            formControlName="email"
            placeholder="cybertron@iloveyou.com..."
            autocomplete="off"
            >
          </div>
          <div
           class="alert alert-danger"
           [hidden]="email.valid || email.untouched">
           Email is required
          </div>
          <div class="mb-3">          
            <label for="message" class="form-label">Message</label>
            <input
            type="text"
            class="form-control"
            id="message"
            formControlName="message"
            placeholder="Thank you for..."
            autocomplete="off"
            >
          </div>
          <div
           class="alert alert-danger"
           [hidden]="message.valid || message.untouched">
           Message is required
          </div>
          <div class="col-12 text-end">
            <button
             class="btn btn-outline-warning my-2"
             [disabled]="visitForm.invalid"
             >Send</button>
          </div>
        </fieldset>
        </form>
    </div>  
  </div>
  <app-go-back/>
  `,
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  visitForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  // Getters
  get name(){
    return this.visitForm.get('name') as FormControl;
  }
  get email(){
    return this.visitForm.get('email') as FormControl;
  }
  get message(){
    return this.visitForm.get('message') as FormControl;
  }

  handleSubmit(){
    if(this.visitForm.invalid) return;
    alert('You completed everything required!!! As weak as an Autobot!!!');
  }

}
