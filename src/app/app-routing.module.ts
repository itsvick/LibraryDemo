import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLibraryCardComponent } from './desktop/desktop-library-card/desktop-library-card.component';
import { MobileLibraryCardComponent } from './mobile/mobile-library-card/mobile-library-card.component';

DesktopLibraryCardComponent

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
    path: '',
    redirectTo: 'desktop-library',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
