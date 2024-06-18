import { catchError, Observable, of } from 'rxjs';
import { Component } from '@angular/core';

import { Group } from '../../model/group';
import { GroupService } from '../services/group.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {
  listGroup$: Observable<Group[]>;

  // Ao usar o Injectableno service, dá pra instanciar pelo contrutor com a variavel já inicializada
  constructor(
    private groupService: GroupService,
    private common: CommonErrorComponent
  ) {
    this.listGroup$ = this.groupService.getAllGroups().pipe(
      catchError((error) => {
        common.onError('Erro ao carregar grupos');
        return of([]);
      })
    );
  }

  openDialog(): void {}
  openDetails(): void {}
  favorite(): void {}
  remove(): void {}
}
