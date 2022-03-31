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
import { TestingComponent } from './testing/testing.component';









const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "gallery", component:GalleryComponent},
  {path:"login-admin", component:LoginAdminComponent},
  {path:"admin", component:AdminComponent},
  {path:"registration-form",component:RegistrationFormComponent},
  {path:"adminboard",component:AdminboardComponent},

  //Testing

  {path:"",component:TestingComponent}






  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
