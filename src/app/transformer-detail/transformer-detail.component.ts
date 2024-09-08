import { AsyncPipe, Location} from '@angular/common';
import { Component, inject, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { transformer } from '../types/types';
import { ApiTransformerService } from '../services/api-transformer.service';
import { GoBackComponent } from '../go-back/go-back.component';

@Component({
  selector: 'app-transformer-detail',
  standalone: true,
  imports: [AsyncPipe, GoBackComponent],
  template: `
  @let transformer = (transformer$ | async);
  <div class="container mt-1">
    <!-- Contenedor principal con imagen -->
    <div class="row justify-content-center mb-4">
      <!-- Columna para la imagen -->
      <div class="col-md-6 text-center">
        <img [src]="transformer?.avatar" alt="Transformer Image" class="img-fluid rounded">
      </div>
    </div>

    <!-- Fila para los detalles del transformer -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card border-light mb-3">
          <div class="card-body text-center">
            @if(!transformer){
              <p>Cargando...</p> <!-- Mensaje de carga mientras se obtienen los datos -->
            }@else {
              <h5 class="card-title">{{transformer.name}}</h5> <!-- Nombre del transformer -->
              <p class="card-text"><strong>Tipo:</strong> {{transformer.type}}</p> <!-- Tipo del transformer -->
              <p class="card-text"><strong>Detalles:</strong> {{transformer.details}}</p> <!-- Detalles del transformer -->
            }
          </div>
        </div>
      </div>
    </div> 
  </div>
  <app-go-back />
  `,
  styleUrl: './transformer-detail.component.css'
})
export class TransformerDetailComponent implements OnInit{
  public transformer$!: Observable<transformer>;
  private api: ApiTransformerService = inject(ApiTransformerService);
  constructor(private location: Location){}
  @Input('id') transformerId!: string;
  ngOnInit(): void {
    this.transformer$ = this.api.getOne(this.transformerId);
  }
}
