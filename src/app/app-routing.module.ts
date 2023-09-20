import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SplahscreenComponent } from './splahscreen/splahscreen.component';
import { OtppageComponent } from './otppage/otppage.component';
import { ProdetailspageComponent } from './prodetailspage/prodetailspage.component';

const routes: Routes = [
  { path:'',component:SplahscreenComponent},
  { path:'start',component:SplahscreenComponent},
  { path:'login',component:LoginpageComponent},
  { path:'otp',component:OtppageComponent},
  { path:'profile',component:ProdetailspageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
