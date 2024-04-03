import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RsuiteFormPopupPluginModule } from 'projects/rsuite-form-popup-plugin/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RsuiteFormPopupPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
