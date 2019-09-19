import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { EditableGridRoutingModule } from './editablegrid-routing.module';
import { EditablegridComponent } from './editablegrid.component';
import { InputTextModule } from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect'
import {DropdownModule} from 'primeng/dropdown';
import {ContextMenuModule} from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog'
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [EditablegridComponent],
  imports: [
    CommonModule,
    EditableGridRoutingModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    DialogModule,
    ButtonModule,
    PaginatorModule,
    
    ContextMenuModule
  ]
})
export class EditableGridModule { }