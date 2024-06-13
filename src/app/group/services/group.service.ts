import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { delay, Observable, take } from 'rxjs';

import { Group } from '../../model/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly api = '../../assets/group.json';
  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.api).pipe(take(1), delay(1000));
  }

  getDetailsGroup(idGroup: number): Observable<Group> {
    return this.http.get<Group>(this.api + `/${idGroup}`).pipe(take(1));
  }

  removeGroup(idGroup: number): Observable<Group> {
    return this.http.delete<Group>(this.api + `/${idGroup}`).pipe(take(1));
  }

  createNewGroup(body: string): Observable<Group> {
    return this.http.post<Group>(this.api, body).pipe(take(1));
  }
}
