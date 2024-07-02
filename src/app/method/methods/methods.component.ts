import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';

import { MethodService } from '../service/method.service';
import { Area, Smart } from '../../model/method';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.css',
})
export class MethodsComponent {

  listSmart$: Observable<Smart[]>;
  listAreas$: Observable<Area[]>;

  constructor(
    private service: MethodService,
    private common: CommonErrorComponent
  ) {

    this.listSmart$ = service.getAllSmart().pipe(
      catchError((error) => {
        common.onError(`Erro ao carregar método SMART`);
        return of([]);
      })
    );

    this.listAreas$ = service.getAllAreas().pipe(
      catchError((error) => {
        common.onError(`Erro ao carregar método por áreas`);
        return of([]);
      })
    );
  }

}
