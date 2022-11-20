import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgIconsModule } from '@ng-icons/core';
import { matMenu, matArrowForward, matCheck } from '@ng-icons/material-icons/baseline';
import { matBackpackOutline, matPlaceOutline, matAddCircleOutline } from '@ng-icons/material-icons/outline';
import { ionLogoFacebook, ionLogoTwitter, ionLogoInstagram, ionLogoLinkedin } from '@ng-icons/ionicons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ErateComponent } from './pages/erate/erate.component';
import { EcfComponent } from './pages/ecf/ecf.component';
import { RhcComponent } from './pages/rhc/rhc.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MappingComponent } from './pages/mapping/mapping.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SwitchItemComponent } from './components/switch-item/switch-item.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { FooterComponent } from './components/footer/footer.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent,
    DropdownComponent,
    ErateComponent,
    EcfComponent,
    RhcComponent,
    CalendarComponent,
    MappingComponent,
    ContactsComponent,
    SwitchComponent,
    SwitchItemComponent,
    ExpandableComponent,
    FooterComponent,
    CallToActionComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ 
      matMenu, 
      matBackpackOutline, 
      matPlaceOutline, 
      matArrowForward,
      matCheck, 
      matAddCircleOutline,
      ionLogoFacebook,
      ionLogoTwitter,
      ionLogoLinkedin,
      ionLogoInstagram
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
