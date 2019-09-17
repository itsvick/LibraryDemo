import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConsumptionComponentsModule } from 'consumption-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsumptionComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
