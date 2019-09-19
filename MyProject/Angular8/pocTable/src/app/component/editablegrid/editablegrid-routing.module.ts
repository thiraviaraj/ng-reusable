import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditablegridComponent } from './editablegrid.component';

const routes: Routes = [{ path: '', component: EditablegridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditableGridRoutingModule { }
