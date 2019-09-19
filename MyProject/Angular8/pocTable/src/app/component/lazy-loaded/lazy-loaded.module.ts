import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyLoadedComponent } from './lazy-loaded.component';


@NgModule({
  declarations: [LazyLoadedComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }