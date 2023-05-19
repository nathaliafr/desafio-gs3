import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoGalleryPage } from './photoGallery.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PhotosgalleryPageRoutingModule } from './photoGallery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PhotosgalleryPageRoutingModule
  ],
  declarations: [PhotoGalleryPage]
})
export class PhotoGalleryPageModule {}
