import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingIndicatorRoutingModule } from './loading-indicator-routing.module';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    LoadingIndicatorRoutingModule,
    SharedModule
  ],
  exports: [
    LoadingIndicatorComponent
  ]
})
export class LoadingIndicatorModule { }
