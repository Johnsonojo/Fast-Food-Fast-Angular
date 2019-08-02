import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
