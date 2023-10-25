import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
