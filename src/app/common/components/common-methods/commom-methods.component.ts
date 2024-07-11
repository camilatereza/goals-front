import { Component, Input } from '@angular/core';
import { Smart } from '../../../model/method';

@Component({
  selector: 'app-common-methods',
  templateUrl: './commom-methods.component.html',
  styleUrl: './commom-methods.component.css',
})
export class CommomMethodsComponent {
  @Input() smartsData?: Smart[];
  @Input() type: 'smart' | 'areas' | '' = '';
}
