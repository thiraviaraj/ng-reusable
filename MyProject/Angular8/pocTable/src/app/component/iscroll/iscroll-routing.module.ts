import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IscrollComponent } from './iscroll.component';

const routes: Routes = [{ path: '', component: IscrollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IscrollRoutingModule { }
