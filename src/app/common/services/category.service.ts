import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly api = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.api).pipe(take(1));
  }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.api}/${id}`).pipe(take(1));
  }
}
