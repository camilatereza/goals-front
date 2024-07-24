import { Component, Inject, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from './../../../model/dialogData';
import { Category } from '../../../model/category';
import { Color } from '../../../model/color';
import { Group } from '../../../model/group';
import { Goal } from '../../../model/goal';
import { Achievable } from '../../../model/achievable';
import { SelectService } from '../../services/select.service';
import { CommonErrorComponent } from '../common-error/common-error.component';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrl: './common-dialog.component.css',
})
export class CommonDialogComponent {
  protected readonly value = signal('');

  public questions: string[] = [];
  public answer: string[] = [''];
  public categories: Category[] = [];
  public colors: Color[] = [];

  stepTwoAble: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private selectService: SelectService,
    private error: CommonErrorComponent,
  ) {

    if (data.type == 'formGroup') {
      this.questions = [
        'Nome do grupo',
        'Descrição',
        'Selecione uma Categoria',
        'Cor geral do grupo',
      ];
      this.loadCategories();
      this.loadColors();

    } else if (data.type == 'formGoal') {
      this.questions = [
        'Nome da meta',
        'Qual o objetivo?',
        'Prazo final',
        'Porque é importante?',
        'Quebre ela em pequenos passos:'
      ];
    }
  }

  onSubmit(): void {
    let newItem = {};
    if (this.data.type == 'formGroup') {
      let category = {
        id: parseInt(this.answer[2][0]),
        name: this.answer[2][1]
      } as Category;

      newItem = {
        id: this.data.id,
        name: this.answer[0],
        favorite: false,
        description: this.answer[1] || '',
        category: category,
        color: this.answer[3] || 'black',
        goals: [] as Goal[]
      } as Group;

    } else {
      newItem = {
        name: this.answer[0],
        specific: this.answer[1],
        timely: this.answer[2],
        relevant: this.answer[3],
        steps: {} as Achievable[],
        measurable: '0'
      } as Goal;
    }

    this.dialogRef.close(newItem);
  }

  onClose(): void {
    this.dialogRef.close(true);
  }

  onDelete(): void {
    this.dialogRef.close(false);
  }

  loadCategories(): void {
    this.selectService.getAllCategories().pipe(
      map((result) => {
        this.categories = result;
        }
      ),
      catchError((error) => {
        this.error.onError('Erro ao carregar categorias');
        return of({} as Category);
      })
    ).subscribe({next: () => {}});
  }

  loadColors(): void {
    this.selectService.getAllColors().pipe(
      map((result) => {
        this.colors = result;
        }
      ),
      catchError((error) => {
        this.error.onError('Erro ao carregar cores para grupos');
        return of({} as Color);
      })
    ).subscribe({next: () => {}});
  }
}
