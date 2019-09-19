import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginatorModule} from 'primeng/paginator';
import { PaginatorCtrlRoutingModule } from './paginatorctrl-routing.module';
import { PaginatorCtrlComponent } from './paginatorctrl.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { TriggerTabDirective } from '../../shared/directives/triggerTab.directive';
import {TooltipModule} from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [PaginatorCtrlComponent, PaginatorComponent, TriggerTabDirective],
  imports: [
    CommonModule,
    PaginatorCtrlRoutingModule,
    PaginatorModule,
    TooltipModule,
    TableModule,
  ]
})
export class PaginatorCtrlModule { }