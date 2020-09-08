import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { MattableComponent } from './mattable/mattable.component';
import { MattablepagingnationComponent } from './mattable/mattablepagingnation/mattablepagingnation.component';
import { MixedMaTableComponent } from './mixed-ma-table/mixed-ma-table.component';
import{MattableSortComponent} from './mattable/mattable-sort/mattable-sort.component';
import { PagingInMattableComponent } from './mattable/paging-in-mattable/paging-in-mattable.component';
import { TreeChecklistExample } from './mattable/checkbox-treeview/checkbox-treeview.component';
const routes: Routes = [ {
   path:'', component:FormComponent},
   { path:'form', component:FormComponent},
   { path:'mattable', component:MattableComponent}, 
   {path:'mattablePaging',component:MattablepagingnationComponent},
   {path:'mattablemix',component:MixedMaTableComponent},
   {path:'matsort',component:MattableSortComponent},
   {path:'matpage',component:PagingInMattableComponent},
   {path:'matchkTreeview',component:TreeChecklistExample}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
