import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ViewComponent
  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
