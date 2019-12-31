import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MobileLibraryCardComponent } from './mobile/mobile-library-card/mobile-library-card.component';
import { DesktopLibraryCardComponent } from './desktop/desktop-library-card/desktop-library-card.component';
import { MasterLibraryComponent } from './demo/master-library/master-library.component';
import { ContentPlayComponent } from './desktop/content-play/content-play.component';


import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { PlayerActionComponent } from './desktop/player-action/player-action.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileLibraryCardComponent,
    DesktopLibraryCardComponent,
    MasterLibraryComponent,
    ContentPlayComponent,
    FaqComponent,
    PlayerActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonConsumptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
