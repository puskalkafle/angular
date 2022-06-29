import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent //run componenet
  ],
  declarations: [
    AppComponent //register my component
  ]
})
export class AppModule {}
