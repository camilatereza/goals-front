import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
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
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class CommonImportsModule {}
