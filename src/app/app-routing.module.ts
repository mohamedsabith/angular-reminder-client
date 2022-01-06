import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ShowEventComponent } from './show-event/show-event.component';

const routes: Routes = [
  {
    path:'',component:LandingPageComponent
  },
  {
    path:'register',component:RegisterPageComponent
  },
  {
    path:'login',component:LoginPageComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'error',component:ErrorPageComponent
  },
  {
    path:'event',component:ShowEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
