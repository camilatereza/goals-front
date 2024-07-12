import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { delay, Observable, take } from 'rxjs';

import { Group } from '../../model/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly api = 'http://localhost:3000/groups';

  constructor(private http: HttpClient) {}

  createNewGroup(body: string): Observable<Group> {
    return this.http.post<Group>(this.api, body).pipe(take(1));
  }

  removeItem(idGroup: number): Observable<Group> {
    return this.http.delete<Group>(`${this.api}/${idGroup}`);
  }

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.api).pipe(take(1));//, delay(1000));
  }

  getDetails(idGroup: number): Observable<Group> {
    return this.http.get<Group>(`${this.api}/${idGroup}`).pipe(take(1));
  }

  favoriteUpdate(idGroup: number, body: string): Observable<Group> {
    return this.http.put<Group>(`${this.api}/${idGroup}`, body);
  }
}
