import { catchError, of } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { CommonErrorComponent } from '../common-error/common-error.component';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';
import { DialogData } from '../../../model/dialogData';
import { ButtonData } from '../../../model/buttonData';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.css',
})
export class CommonButtonComponent {
  @Input() data = {} as ButtonData;
  @Output() itemDeleted = new EventEmitter<number>();

  constructor(
    private location: Location,
    private error: CommonErrorComponent,
    private dialog: MatDialog
  ) {}

  toggleFavorite(): void {
    if (this.data.item) {
      this.data.item.favorite = !this.data.item.favorite;

      let update = this.data.service.favoriteUpdate(this.data.item);
      update.pipe(
        catchError((error) => {
          this.error.onError('Erro ao favoritar dado: ' + this.data.item.name);
          return of([]);
        })
      ).subscribe();
    } else {
      this.error.onError(
        'Não é possivel favoritar este dado! Por favor informe um dado válido.'
      );
    }
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '300px',
      data: {
        type: 'delete',
        title: 'Excluir dado',
        msg: 'Tem certeza que deseja remover o dado?',
      } as DialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        this.deleteItem();
      }
    });
  }

  deleteItem(): void {
    let item = this.data.item;
    let remove = this.data.service.removeItem(item.id);

    remove.subscribe(
      () => {
        //Para notificar o dado deletado e atualizar listagem da tela
        this.itemDeleted.emit(item.id);
      },
      (error: any) => {
        this.error.onError(
          'Não foi possível remover! Por favor, informe um dado válido.'
        );
      }
    );
  }

  back(): void {
    this.location.back();
  }
}
