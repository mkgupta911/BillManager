import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {DataService } from "./data-services/supplier-data";
import { SupplyReportComponent } from './supply-report/supply-report.component';
import {MaterialExampleModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    SupplyReportComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
