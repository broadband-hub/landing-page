import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { NgIconsModule } from '@ng-icons/core';
import { matMenu } from '@ng-icons/material-icons/baseline';
import { matBackpackOutline, matPlaceOutline } from '@ng-icons/material-icons/outline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgIconsModule.withIcons({ matMenu, matBackpackOutline, matPlaceOutline })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
