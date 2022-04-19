import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'

import { AdminboardComponent } from './adminboard/adminboard.component';
import { TestingComponent } from './testing/testing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ParticipantComponent } from './participant/participant.component';
import { LayoutComponent } from './layout/layout.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RewardComponent } from './reward/reward.component';

import {CKEditorModule} from 'ng2-ckeditor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RewardsComponent,
    GalleryComponent,
    LoginAdminComponent,
    RegistrationFormComponent,
    AdminboardComponent,
    TestingComponent,
    LandingPageComponent,
    SignUpComponent,
    UserLoginComponent,
    ParticipantComponent,
    LayoutComponent,
    AnnoucementComponent,
    SidebarComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


