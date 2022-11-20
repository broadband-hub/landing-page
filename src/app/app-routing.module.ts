import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EcfComponent } from './pages/ecf/ecf.component';
import { ErateComponent } from './pages/erate/erate.component';
import { HomeComponent } from './pages/home/home.component';
import { MappingComponent } from './pages/mapping/mapping.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { RhcComponent } from './pages/rhc/rhc.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'platforms/erate', component: ErateComponent },
  { path: 'platforms/emergency-connectivity-fund', component: EcfComponent },
  { path: 'platforms/rural-health-care', component: RhcComponent },
  { path: 'features/mapping', component: MappingComponent },
  { path: 'features/calendar', component: CalendarComponent },
  { path: 'features/contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
