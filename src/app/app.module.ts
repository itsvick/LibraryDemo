import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConsumptionComponentsModule } from 'consumption-components';
import { MobileLibraryCardComponent } from './mobile/mobile-library-card/mobile-library-card.component';
import { DesktopLibraryCardComponent } from './desktop/desktop-library-card/desktop-library-card.component';
import { MasterLibraryComponent } from './demo/master-library/master-library.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileLibraryCardComponent,
    DesktopLibraryCardComponent,
    MasterLibraryComponent
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
