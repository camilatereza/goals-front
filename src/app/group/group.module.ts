import { CommonImportsModule } from '../common/common-imports.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group/group.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';

@NgModule({
  declarations: [GroupComponent, GroupDetailsComponent],
  imports: [CommonModule, GroupRoutingModule, CommonImportsModule],
})
export class GroupModule {}
