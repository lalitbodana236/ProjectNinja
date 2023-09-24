import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { BlogComponent } from './core/blog/blog.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { ProfileComponent } from './core/profile/profile.component';
import { ViewComponent } from './core/view/view.component';
import { SectionComponent } from './core/section/section.component';
import { LoginComponent } from './core/login/login.component';

import { AuthGuard } from './auth.guard'; // Import the AuthGuard
import { RegistrationComponent } from './unauth/registration/registration.component';
import { UnauthorisedComponent } from './unauth/unauthorised/unauthorised.component';

const routes: Routes = [
  // All routes except 'login' will have the AuthGuard
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'view', component: ViewComponent, canActivate: [AuthGuard] },
  { path: 'section', component: SectionComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, // 'login' route does not have the AuthGuard
  { path: 'register', component: RegistrationComponent }, // 'login' route does not have the AuthGuard
  { path: 'unauth', component: UnauthorisedComponent }, // 'login' route does not have the AuthGuard
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
