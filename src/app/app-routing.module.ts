import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { ParticipantComponent } from './participant/participant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardComponent } from './reward/reward.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';









const routes: Routes = [
  {path: "",component:LandingPageComponent},
  {path: "home",component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "registration-form", component:RegistrationFormComponent},
  {path: "login-form", component:LoginFormComponent},
  {path: "user-login",component:UserLoginComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "layout", component:LayoutComponent},
  {path: "participant", component:ParticipantComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "reward", component:RewardComponent},
  {path: "annoucement", component:AnnoucementComponent},
  {path: "public-annoucement", component:PublicAnnoucementComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
