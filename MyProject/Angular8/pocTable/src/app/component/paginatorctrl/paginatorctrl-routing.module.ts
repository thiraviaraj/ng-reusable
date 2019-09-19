import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginatorCtrlComponent } from './paginatorctrl.component';

const routes: Routes = [{ path: '', component: PaginatorCtrlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatorCtrlRoutingModule { }
