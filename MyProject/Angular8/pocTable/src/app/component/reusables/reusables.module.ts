import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusablesRoutingModule } from './reusables-routing.module';
import { ReusablesComponent } from './reusables.component';
import { DatatableComponent } from './datatable/datatable.component';



@NgModule({
    declarations: [ReusablesComponent, DatatableComponent],
    imports: [
        CommonModule,
        ReusablesRoutingModule
    ],
    providers: [],
    bootstrap: [ReusablesComponent]
  })
  export class ReusableModule { }
  