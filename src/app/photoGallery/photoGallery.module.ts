import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoGalleryPage } from './photoGallery.page';

import { PhotosgalleryPageRoutingModule } from './photoGallery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PhotosgalleryPageRoutingModule
  ],
  declarations: [PhotoGalleryPage]
})
export class PhotoGalleryPageModule {}
