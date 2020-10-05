import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavebarComponent } from './savebar.component';
import { ITemplateCacheService, ILocationProvider } from 'angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemsComponent } from './sidebar/items/items.component';

@NgModule({
  declarations: [SavebarComponent, SidebarComponent, ItemsComponent],
  imports: [CommonModule],
  exports: [SavebarComponent],
})
export class SavebarModule {}
