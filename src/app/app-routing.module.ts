import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLibraryCardComponent } from './desktop/desktop-library-card/desktop-library-card.component';
import { MobileLibraryCardComponent } from './mobile/mobile-library-card/mobile-library-card.component';
import { MasterLibraryComponent } from './demo/master-library/master-library.component';
import { ContentPlayComponent } from './desktop/content-play/content-play.component';


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
