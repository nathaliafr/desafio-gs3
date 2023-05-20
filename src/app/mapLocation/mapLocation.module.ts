import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapLocationPage } from './mapLocation.page';

import { MapLocationPageRoutingModule } from './mapLocation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapLocationPageRoutingModule
  ],
  declarations: [MapLocationPage]
})
export class MapLocationPageModule {}
