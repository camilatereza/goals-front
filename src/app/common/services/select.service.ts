import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Category } from '../../model/category';
import { Color } from '../../model/color';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private readonly api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/categories`).pipe(take(1));
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.api}/categories/${id}`).pipe(take(1));
  }

  getAllColors(): Observable<Color[]> {
    return this.http.get<Color[]>(`${this.api}/colors`).pipe(take(1));
  }

  getColorById(id: number): Observable<Color> {
    return this.http.get<Color>(`${this.api}/colors/${id}`).pipe(take(1));
  }
}
