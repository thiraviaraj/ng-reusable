import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';


@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    TabRoutingModule,
    TabMenuModule
  ]
})
export class TabModule { }