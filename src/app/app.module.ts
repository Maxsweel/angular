import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //HomeModule //chamando home.module que por sua vez chama o home.component que abre o html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
