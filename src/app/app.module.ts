import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NguCarouselModule } from '@ngu/carousel';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StepsComponent } from './steps/steps.component';
import { SliderComponent } from './slider/slider.component';
import { FonctionnementComponent } from './fonctionnement/fonctionnement.component';
import { ContactComponent } from './contact/contact.component';
import { browser } from 'protractor';


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
    BrowserModule,
    Ng2PageScrollModule,
    NguCarouselModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
