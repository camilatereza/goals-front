import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, take } from 'rxjs';
import { Area, Smart } from '../../model/method';
import { HttpClient } from '@angular/common/http';
import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';

@Injectable({
  providedIn: 'root',
})
export class MethodService {
  private readonly api = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private common: CommonErrorComponent
  ) {}

  public getAllSmart(): Observable<Smart[]> {
    return this.http.get<Smart[]>(`${this.api}/smart`).pipe(take(1));
  }

  public getAllAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.api}/areas`).pipe(take(1));
  }

  public getBigAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.api}/areas`).pipe( take(1),
      map(areas => areas.filter(area => area.groupArea === null))
    );
  }

  public getAreaById(id?: number): Area {
    let area: Area = {} as Area;

    this.http.get<Area>(`${this.api}/areas/${id}`)
      .pipe(take(1))
      .subscribe((result) => {
        area = result
      });

    return area;
  }
}
