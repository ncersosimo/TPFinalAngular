import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transformer } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiTransformerService {
  private url = 'https://66d4b5d95b34bcb9ab3f4a8a.mockapi.io/transformers/personaje'
  constructor(private http: HttpClient){}
  getAll(): Observable<transformer[]>{
    return this.http.get<transformer[]>(this.url);
  }
  createOne(newHero: transformer){
    const headers = new HttpHeaders({'Content-Type': 'application/json'}) 
    return this.http.post<transformer>(this.url, newHero, { headers })
  }
  getOne(id: string): Observable<transformer> {
    return this.http.get<transformer>(this.url + '/'+ id);
  }
}

