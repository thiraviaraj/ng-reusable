import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IscrollRoutingModule } from './iscroll-routing.module';
import { IscrollComponent } from './iscroll.component';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [IscrollComponent],
  imports: [
    CommonModule,
    IscrollRoutingModule,
    TableModule,
    PaginatorModule
  ]
})
export class IscrollModule { }