import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { ToastrModule } from 'ng6-toastr-notifications';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { LoginComponent } from './core/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthService } from './shared/services/auth/auth.service';
import { SpinnerComponent } from './core/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  entryComponents: [LoginComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
