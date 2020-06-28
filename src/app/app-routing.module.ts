import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLibraryCardComponent } from './desktop/desktop-library-card/desktop-library-card.component';
import { MobileLibraryCardComponent } from './mobile/mobile-library-card/mobile-library-card.component';
import { MasterLibraryComponent } from './demo/master-library/master-library.component';
import { ContentPlayComponent } from './desktop/content-play/content-play.component';
import { FaqComponent } from './faq/faq.component';
import { PlayerActionComponent } from './desktop/player-action/player-action.component';
import { ContentListComponent } from './portal/content-list/content-list.component';
import { ContentDetailsComponent } from './portal/content-details/content-details.component';

const routes: Routes = [
  {
    path: 'desktop-library',
    component: DesktopLibraryCardComponent
  },
  {
    path: 'mobile-library',
    component: MobileLibraryCardComponent
  },
  {
    path: 'library',
    component: MasterLibraryComponent
  },
  {
    path: 'content-play',
    component: ContentPlayComponent
  },
  {
    path: 'content-details',
    component: ContentDetailsComponent
  },
  {
    path: 'play-action',
    component: PlayerActionComponent
  },
  {
    path: 'offline-library',
    loadChildren: './offline-library-page/offline-library-page.module#OfflineLibraryPageModule'
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'content-list',
    component: ContentListComponent
  },
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
