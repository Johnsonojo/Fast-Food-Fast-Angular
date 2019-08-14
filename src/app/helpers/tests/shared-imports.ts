import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ng6-toastr-notifications';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';

export const getSharedComponentImports = () => {
  return [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientTestingModule,
    RouterTestingModule.withRoutes([]),
    ToastrModule.forRoot(),
    MatDialogModule,
  ];
};
