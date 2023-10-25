import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'form', component: FormComponent},
      {path: 'grid', component: GridComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
