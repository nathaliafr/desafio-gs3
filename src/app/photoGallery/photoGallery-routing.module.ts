import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryPage } from './photoGallery.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosgalleryPageRoutingModule {}
