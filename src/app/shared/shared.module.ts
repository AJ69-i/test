import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    RouterModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgxSpinnerModule,
    MatPaginatorModule

  ],
  exports: [
    RouterModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgxSpinnerModule,
    AngularSvgIconModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
