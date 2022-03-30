import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { ParticipantsComponent } from './participants/participants.component';

const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "registration-form", component:RegistrationFormComponent},
  {path: "adminboard", component:AdminboardComponent},
  {path: "participants", component:ParticipantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
