/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ZingChartModule }  from 'ng-zingchart';

@Component({
  selector: 'app',
  template: `<zingchart-component></zingchart-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, ZingChartModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
