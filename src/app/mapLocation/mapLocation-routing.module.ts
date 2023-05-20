import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLocationPage } from './mapLocation.page';

const routes: Routes = [
  {
    path: '',
    component: MapLocationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapLocationPageRoutingModule {}
