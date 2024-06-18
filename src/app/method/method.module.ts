import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodRoutingModule } from './method-routing.module';
import { MethodsComponent } from './methods/methods.component';
import { CommonImportsModule } from '../common/common-imports.module';

@NgModule({
  declarations: [MethodsComponent],
  imports: [CommonModule, MethodRoutingModule, CommonImportsModule],
})
export class MethodModule {}
