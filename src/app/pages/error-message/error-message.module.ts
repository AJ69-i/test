import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageRoutingModule } from './error-message-routing.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageRoutingModule,
    SharedModule
  ],
  exports: [
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule { }
