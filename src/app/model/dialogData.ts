export interface DialogData {
  type: 'formGroup' | 'formGoal' | 'delete' | 'error';
  title: string;
  msg?: string;
  id?: number;
}
