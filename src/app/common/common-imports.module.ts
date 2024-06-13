import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class CommonImportsModule {}
