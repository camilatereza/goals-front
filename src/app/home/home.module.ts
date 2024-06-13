import { CommonImportsModule } from '../common/common-imports.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MethodComponent } from './components/method/method.component';

@NgModule({
  declarations: [HomeComponent, MethodComponent],
  imports: [CommonModule, HomeRoutingModule, CommonImportsModule],
})
export class HomeModule {}
