import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';

const routes: Routes = [
  {
    path: "" , component: PaginationControlsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationControlsRoutingModule { }
