import { catchError, map, Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Group } from '../../model/group';
import { GroupService } from '../services/group.service';
import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {
  listGroup$?: Observable<Group[]>;

  // Ao usar o Injectable no service, dá pra instanciar pelo contrutor com a variavel já inicializada
  constructor(
    public groupService: GroupService,
    private common: CommonErrorComponent,
    private router: Router
  ) {
    this.listGroup$ = this.groupService.getAllGroups().pipe(
      catchError((error) => {
        this.common.onError('Erro ao carregar grupos');
        return of([]);
      })
    );
  }

  reloadItens(groupId?: number) {
    this.listGroup$ = this.groupService.getAllGroups().pipe(
      map((groups) =>
        groups.filter((group) => {
          return group.id != groupId;
        })
      ),
      catchError((error) => {
        this.common.onError('Erro ao carregar grupos');
        return of([]);
      })
    );
  }

  onAdd(): void {}

  openDetails(group: Group): void {
    this.router.navigate(['/group', group.id], {
      state: { group: group },
    });
  }

  getColor(group: Group): string {
    return group.color || '';
  }
}
