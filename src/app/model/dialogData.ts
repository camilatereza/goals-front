export interface DialogData {
  type: 'form' | 'delete' | 'error';
  title: string;
  msg?: string;
}
