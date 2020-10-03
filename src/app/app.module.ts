import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BannerComponent } from './pages/home-page/banner/banner.component';
import { WorksComponent } from './pages/home-page/works/works.component';
import { AboutUsComponent } from './pages/home-page/about-us/about-us.component';
import { ContactComponent } from './pages/home-page/contact/contact.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

// fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WebDevCardsComponent } from './pages/home-page/works/cards/web-dev-cards/web-dev-cards.component';
import { IllustrationCardsComponent } from './pages/home-page/works/cards/illustration-cards/illustration-cards.component';
import { UiUxCardsComponent } from './pages/home-page/works/cards/ui-ux-cards/ui-ux-cards.component';
import { LogoDesCardsComponent } from './pages/home-page/works/cards/logo-des-cards/logo-des-cards.component';
import { GraphicDesCardsComponent } from './pages/home-page/works/cards/graphic-des-cards/graphic-des-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WorksComponent,
    AboutUsComponent,
    ContactComponent,
    WebDevCardsComponent,
    IllustrationCardsComponent,
    UiUxCardsComponent,
    LogoDesCardsComponent,
    GraphicDesCardsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
