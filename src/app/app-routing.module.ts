import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AdminComponent } from './admin/admin.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AppComponent } from './app.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LayoutComponent } from './layout/layout.component';
import { ParticipantComponent } from './participant/participant.component';
import { RewardComponent } from './reward/reward.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';
////testing.....

import { TestComponent } from './test/test.component';









const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "gallery", component:GalleryComponent},
  {path:"login-admin", component:LoginAdminComponent},
  {path:"admin", component:AdminComponent},
  {path:"registration-form",component:RegistrationFormComponent},
  {path:"adminboard",component:AdminboardComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"",component:LandingPageComponent},
  {path:"layout",component:LayoutComponent},
  {path:"participant",component:ParticipantComponent},
  {path:"reward",component:RewardComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"annoucement",component:AnnoucementComponent},
  {path:"public-annoucement",component:PublicAnnoucementComponent},

  //Testing
  {path:"test",component:TestComponent},







  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
