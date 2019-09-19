import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabComponent } from './tab.component';

const routes: Routes = [{ path: '', component: TabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
