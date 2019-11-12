import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineLibraryPageComponent } from './offline-library-page.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: OfflineLibraryPageComponent
    }
];

@NgModule({
  declarations: [OfflineLibraryPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OfflineLibraryPageModule { }
