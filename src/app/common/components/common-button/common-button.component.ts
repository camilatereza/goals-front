import { catchError, of } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { CommonErrorComponent } from '../common-error/common-error.component';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';
import { DialogData } from '../../../model/dialogData';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.css',
})
export class CommonButtonComponent {
  @Input() type: 'favorite' | 'delete' | 'back' | null = null;
  @Input() white?: boolean;
  @Input() item?: any;
  @Input() service?: any;
  @Output() itemDeleted = new EventEmitter<number>();

  constructor(
    private location: Location,
    private error: CommonErrorComponent,
    private dialog: MatDialog
  ) {}

  toggleFavorite(): void {
    if (this.item != null) {
      this.item.favorite = !this.item.favorite;
      const body = JSON.stringify(this.item);

      this.service.favoriteUpdate(this.item.id, body).pipe(
        catchError((error) => {
          this.error.onError('Erro ao favoritar grupo');
          return of([]);
        })
      );
    } else {
      this.error.onError(
        'Não é possivel favoritar! Por favor informe um dado válido.'
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
        this.deleteItem(this.item);
      }
    });
  }

  deleteItem(data: any): void {
    let remove = this.service.removeItem(data.id);

    remove.subscribe(
      () => {
        //Para notificar o dado deletado e atualizar listagem da tela
        this.itemDeleted.emit(data.id);
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
