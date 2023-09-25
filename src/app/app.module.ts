import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SplahscreenComponent } from './splahscreen/splahscreen.component';
import { OtppageComponent } from './otppage/otppage.component';
import { ProdetailspageComponent } from './prodetailspage/prodetailspage.component';
import { KdsViewOrdersComponent } from './kds-view-orders/kds-view-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SplahscreenComponent,
    OtppageComponent,
    ProdetailspageComponent,
    KdsViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
