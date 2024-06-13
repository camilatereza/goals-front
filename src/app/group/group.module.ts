import { CommonImportsModule } from '../common/common-imports.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [GroupComponent],
  imports: [CommonModule, GroupRoutingModule, CommonImportsModule],
})
export class GroupModule {}
