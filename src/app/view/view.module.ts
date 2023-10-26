import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './form/components/modal/modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskDirective } from 'ngx-mask';
import { IgxActionStripModule, IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule, IgxDatePickerModule, IgxDialogModule, IgxDragDropModule, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxListModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSimpleComboModule, IgxSliderModule, IgxSnackbarModule, IgxSwitchModule, IgxToastModule, IgxToggleModule, IgxTooltipModule, IgxTreeGridModule } from 'igniteui-angular';



@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    GridComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
        IgxTreeGridModule,
        IgxGridModule,
        IgxActionStripModule,
        IgxButtonGroupModule,
        IgxIconModule,
        IgxSliderModule,
        IgxToggleModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxRippleModule,
        IgxDialogModule,
        IgxRadioModule,
        IgxAvatarModule,
        IgxToastModule,
        IgxSelectModule,
        IgxBannerModule,
        IgxBadgeModule,
        IgxCheckboxModule,
        IgxSnackbarModule,
        IgxTooltipModule,
        IgxListModule,
        IgxChipsModule,
        IgxDatePickerModule,
        IgxSimpleComboModule,
        IgxInputGroupModule,
        IgxDragDropModule,
        IgxFocusModule
  ]
})
export class ViewModule { }
