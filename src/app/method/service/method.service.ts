import { Injectable } from '@angular/core';
import { delay, Observable, take } from 'rxjs';
import { Method } from '../../model/method';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MethodService {
  private readonly api = '../../assets/group.json';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Method[]> {
    return this.http.get<Method[]>(this.api).pipe(take(1), delay(1000));
  }
}
