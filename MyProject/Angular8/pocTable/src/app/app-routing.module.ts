import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: "reusables", loadChildren: './component/reusables/reusables.module#ReusableModule'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "lazy",
    loadChildren: "./component/lazy-loaded/lazy-loaded.module#LazyLoadedModule"
  },
  {
    path: "eGrid",
    loadChildren: "./component/editablegrid/editablegrid.module#EditableGridModule"
  },
  {
    path: "iScroll",
    loadChildren: "./component/iscroll/iscroll.module#IscrollModule"
  },
  {
    path: "paginator",
    loadChildren: "./component/paginatorctrl/paginatorctrl.module#PaginatorCtrlModule"
  },
  {
    path: "sGrid",
    loadChildren: "./component/sgrid/sgrid.module#SgridModule"
  },
  {
    path: "tab",
    loadChildren: "./component/tab/tab.module#TabModule"
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
