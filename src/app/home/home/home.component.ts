import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Smart } from '../../model/method';
import { MethodService } from '../../method/service/method.service';
import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  listSmart$: Observable<Smart[]>;

  constructor(
    private service: MethodService,
    private common: CommonErrorComponent
  ){
    this.listSmart$ = service.getAllSmart().pipe(
      catchError((error) => {
        common.onError(`Erro ao carregar método SMART`);
        return of([]);
      })
    );
  }

}
