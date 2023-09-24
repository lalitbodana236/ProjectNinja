import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatTabsModule } from '@angular/material/tabs';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/shared/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { BlogComponent } from './core/blog/blog.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { ProfileComponent } from './core/profile/profile.component';
import { ProfileDropdownComponent } from './core/profile-dropdown/profile-dropdown.component';
import { NotificationPanelComponent } from './core/notification-panel/notification-panel.component';
import { SectionComponent } from './core/section/section.component';
import { ViewComponent } from './core/view/view.component';
import { LeftSectionComponent } from './core/section/left-section/left-section.component';
import { RightSectionComponent } from './core/section/right-section/right-section.component';
import { CenterSectionComponent } from './core/section/center-section/center-section.component';
import { LoginComponent } from './core/login/login.component';
import { UnauthorisedComponent } from './unauth/unauthorised/unauthorised.component';
import { RegistrationComponent } from './unauth/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor';
import { AboutComponent } from './unauth/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    NotificationsComponent,
    ProfileComponent,
    ProfileDropdownComponent,
    NotificationPanelComponent,
    SectionComponent,
    ViewComponent,
    LeftSectionComponent,
    RightSectionComponent,
    CenterSectionComponent,
    LoginComponent,
    UnauthorisedComponent,
    RegistrationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,FormsModule,HttpClientModule,MatTabsModule, BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, // Add your interceptor class here
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
