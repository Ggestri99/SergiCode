import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatSlideToggleModule,
    MatCardModule

  ]
})
export class ViewModule { }
