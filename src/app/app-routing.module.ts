import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { BlogComponent } from './core/blog/blog.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { ProfileComponent } from './core/profile/profile.component';
import { ViewComponent } from './core/view/view.component';
import { SectionComponent } from './core/section/section.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'blog', component: BlogComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'view', component: ViewComponent },
  { path: 'section', component: SectionComponent },
   { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
