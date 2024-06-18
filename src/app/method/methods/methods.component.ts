import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';

import { MethodService } from '../service/method.service';
import { Method } from '../../model/method';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.css',
})
export class MethodsComponent {
  listMethods$: Observable<Method[]>;

  constructor(
    private service: MethodService,
    private common: CommonErrorComponent
  ) {
    this.listMethods$ = service.getAll().pipe(
      catchError((error) => {
        common.onError(`Erro ${error.code} ao carregar grupos`);
        return of([]);
      })
    );
  }
}
