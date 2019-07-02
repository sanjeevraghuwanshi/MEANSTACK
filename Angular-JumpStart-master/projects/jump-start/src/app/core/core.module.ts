import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GrowlerModule } from './growler/growler.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SorterService } from './services/sorter.service';
import { TrackbyService } from './services/trackby.service';
import { FilterService } from './services/filter.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, GrowlerModule, HttpClientModule],
  exports: [NavbarComponent, GrowlerModule, HttpClientModule],
  providers: [AuthService, SorterService, TrackbyService, FilterService, DataService]
})
export class CoreModule {}
