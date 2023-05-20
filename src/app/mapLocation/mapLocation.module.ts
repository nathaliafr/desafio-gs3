import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapLocationPage } from './mapLocation.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MapLocationPageRoutingModule } from './mapLocation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MapLocationPageRoutingModule
  ],
  declarations: [MapLocationPage]
})
export class MapLocationPageModule {}
