import { Component, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrl: './common-error.component.css',
})
@Injectable({
  providedIn: 'root',
})
export class CommonErrorComponent {
  constructor(private _snackBar: MatSnackBar) {}

  public onError(msg: string) {
    const snackBarConfig: MatSnackBarConfig = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: 'mat-snackbar-warn',
    };
    this._snackBar.open(msg, 'Cancelar', snackBarConfig);
  }

  public errorMsg (msg: string): void {
    catchError((error) => {
      this.onError(msg);
      return of([]);
    });
  }
}
