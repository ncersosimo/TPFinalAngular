import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { transformer } from '../types/types';
import { ApiTransformerService } from '../services/api-transformer.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { GoBackComponent } from '../go-back/go-back.component';

@Component({
  selector: 'app-transformers-list',
  standalone: true,
  imports: [AsyncPipe, GoBackComponent],
  template: `

<div class="container mt-4">
  @let transformersList = (transformersResult$ | async);
  @if(!transformersList?.length){
    <p>Loading...</p>
  }@else {
    <div class="row mx-auto col-md-8 col-lg-6">      
      <div class="row bg-dark text-white fw-bold border border-dark rounded-top">
        <div class="col-2">#</div>
        <div class="col-10">Name</div>
      </div>

      @for(transformers of transformersList; track transformers.id; let i = $index){
        <div class="row border-dark border-start border-end py-2 align-items-center striped-row" 
             (click)="onTransformerClicked(transformers.id)" style="cursor: pointer;">
          <div class="col-2">{{ i + 1 }}</div>
          <div class="col-10">{{ transformers.name }}</div>
        </div>
      }
      <div class="row border border-dark rounded-bottom"></div>
    </div>

  }
</div>
<app-go-back />

  `,
  styleUrl: './transformers-list.component.css'
})
export class TransformersListComponent implements OnInit {
  public transformersResult$!: Observable<transformer[]>;
  constructor(private api: ApiTransformerService, private router: Router) { }

  ngOnInit(): void {
    this.transformersResult$ = this.api.getAll();
  }
  onTransformerClicked(transformerId: string | undefined): void {
    this.router.navigate(['/transformer', transformerId]);
  }
}
