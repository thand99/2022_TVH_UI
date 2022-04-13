import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Injectable } from '@angular/core';
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
    RewardComponent,
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    CKEditorModule,
    

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


