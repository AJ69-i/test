import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationControlsRoutingModule } from './pagination-controls-routing.module';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PaginationControlsComponent
  ],
  imports: [
    CommonModule,
    PaginationControlsRoutingModule,
    SharedModule
  ],
  exports: [PaginationControlsComponent]
})
export class PaginationControlsModule { }
