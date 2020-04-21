import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChartsModule} from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponentComponent } from './chart-component/chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
