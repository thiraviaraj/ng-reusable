import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SgridRoutingModule } from './sgrid-routing.module';
import { SgridComponent } from './sgrid.component';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect'
import {ContextMenuModule} from 'primeng/contextmenu';
import {ScrollDirective} from '../../shared/directives/scroll.diretive';

@NgModule({
  declarations: [SgridComponent,ScrollDirective],
  imports: [
    CommonModule,
    SgridRoutingModule,
    TableModule,
    PaginatorModule,
    MultiSelectModule,
    ContextMenuModule
  ]
})
export class SgridModule { }