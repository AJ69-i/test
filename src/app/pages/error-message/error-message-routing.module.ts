import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

const routes: Routes = [
  {
    path: "", component: ErrorMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorMessageRoutingModule { }
