import { catchError, map, Observable, of, } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { Group } from '../../model/group';
import { DialogData } from '../../model/dialogData';
import { GroupService } from '../services/group.service';
import { CommonErrorComponent } from '../../common/components/common-error/common-error.component';
import { CommonDialogComponent } from '../../common/components/common-dialog/common-dialog.component';

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
    private dialog: MatDialog,
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
    this.listGroup$ = this.groupService.getAllGroups();

    this.listGroup$.pipe(
      catchError((error) => {
        this.common.onError('Erro ao recarregar grupos');
        return of([]);
    }));

    if (groupId) {
      this.listGroup$.pipe(
        map((groups) =>
          groups.filter((group) => {
            return group.id != groupId;
          })
      ));
    }
  }

  openAddDialog(quant: number): void {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '400px',
      data: {
        type: 'formGroup',
        title: 'Novo Grupo',
        id: quant + 2
      } as DialogData
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.id) {
        this.onAddGroup(result);
      } else (
        this.dialog.closeAll()
      )
    });
  }

  onAddGroup(result: Group): void {
    let create = this.groupService.createNewGroup(result);

    create.pipe(
      catchError((error) => {
        this.common.onError('Erro ao criar o grupo: ' + result.name);
        return of([]);
      })
    ).subscribe(() => {
      this.reloadItens();
    });
  }

  openDetails(group: Group): void {
    this.router.navigate(['/group', group.id], {
      state: { group: group },
    });
  }

  getColor(group: Group): string {
    return group.color || '';
  }
}
