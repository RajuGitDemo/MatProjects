import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { MattableComponent } from './mattable/mattable.component';
import { MattablepagingnationComponent } from './mattable/mattablepagingnation/mattablepagingnation.component';
import { MixedMaTableComponent } from './mixed-ma-table/mixed-ma-table.component';
import { MattableSortComponent } from './mattable/mattable-sort/mattable-sort.component';
import { PagingInMattableComponent } from './mattable/paging-in-mattable/paging-in-mattable.component';
import { TreeChecklistExample } from './mattable/checkbox-treeview/checkbox-treeview.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ControlMessagesComponent,
    MattableComponent,
    MattablepagingnationComponent,
    MixedMaTableComponent,
    MattableSortComponent,
    PagingInMattableComponent,
    TreeChecklistExample   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
