import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TourneyComponent } from './tourney/tourney.component';
import { ContactComponent } from './contact/contact.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PlayerchartsComponent } from './playercharts/playercharts.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({

  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    PromotionsComponent,
    TourneyComponent,
    ContactComponent,
    MarketplaceComponent,
    PlayerchartsComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
