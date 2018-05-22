import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StepsComponent } from './steps/steps.component';
import { SliderComponent } from './slider/slider.component';
import { FonctionnementComponent } from './fonctionnement/fonctionnement.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StepsComponent,
    SliderComponent,
    FonctionnementComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
