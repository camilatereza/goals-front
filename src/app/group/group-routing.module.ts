import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';

const routes: Routes = [
  { path: '', component: GroupComponent },
  { path: ':id', component: GroupDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {}
