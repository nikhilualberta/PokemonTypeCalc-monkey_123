import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeCalcComponent } from './type-calc/type-calc.component';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
@NgModule({
  declarations: [
    AppComponent,
    TypeCalcComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatButtonModule,
        MatGridListModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
