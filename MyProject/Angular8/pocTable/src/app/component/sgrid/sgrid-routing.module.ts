import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SgridComponent } from './sgrid.component';

const routes: Routes = [{ path: '', component: SgridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SgridRoutingModule { }
