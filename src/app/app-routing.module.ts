import { NgModule,ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TourneyComponent } from './tourney/tourney.component';
import { ContactComponent } from './contact/contact.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PlayerchartsComponent } from './playercharts/playercharts.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Promotions',      component: PromotionsComponent },
  { path: 'Tourneys',      component: TourneyComponent },
  { path: 'Players',      component: PlayerchartsComponent },
  { path: 'News',      component: NewsComponent },
  { path: 'Marketplace',      component: MarketplaceComponent },
  { path: 'Contact',      component: ContactComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
