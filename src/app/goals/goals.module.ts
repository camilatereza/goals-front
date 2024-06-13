import { CommonImportsModule } from '../common/common-imports.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  declarations: [GoalsComponent],
  imports: [CommonModule, GoalsRoutingModule, CommonImportsModule],
})
export class GoalsModule {}
