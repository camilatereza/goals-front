import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CommonErrorComponent } from './components/common-error/common-error.component';
import { CommomMethodsComponent } from './components/common-methods/commom-methods.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';

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
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule,
    CommonErrorComponent,
    CommomMethodsComponent,
    CommonButtonComponent,
    CommonDialogComponent,
  ],
  declarations: [
    CommonErrorComponent,
    CommomMethodsComponent,
    CommonButtonComponent,
    CommonDialogComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
  ],
})
export class CommonImportsModule {}
