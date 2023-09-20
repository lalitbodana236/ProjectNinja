import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

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
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
