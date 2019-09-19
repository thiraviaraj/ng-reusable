import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReusablesComponent } from './reusables.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
    {
        path: '',
        component: ReusablesComponent
    },
    {
        path: 'datable',
        component: DatatableComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusablesRoutingModule { }