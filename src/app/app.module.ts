import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SavebarModule } from './savebar/savebar.module';
import { SavebarComponent } from './savebar/savebar.component';

import { AppComponent } from './app.component';
import { ITemplateCacheService, ILocationProvider } from 'angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SavebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent, SavebarComponent]
})
export class AppModule {
  static config($locationProvider: ILocationProvider) {
    $locationProvider.html5Mode(true);
  }

  public static run($templateCache: ITemplateCacheService) {}
}

AppModule.config.$inject = ['$locationProvider'];
AppModule.run.$inject = ['$templateCache'];

