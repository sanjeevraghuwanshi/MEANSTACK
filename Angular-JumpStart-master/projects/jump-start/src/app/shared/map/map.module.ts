import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapPointComponent } from './map-point/map-point.component';

@NgModule({
  declarations: [MapComponent, MapPointComponent],
  imports: [CommonModule],
  exports: [MapComponent, MapPointComponent]
})
export class MapModule {}
