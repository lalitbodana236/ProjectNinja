import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ConstantsService } from 'src/app/constants.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private constants: ConstantsService
  ) {}
  title = this.constants.APP_NAME;
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  // This method performs some operations and then redirects to the specified route
  performOperationsAndRedirect(route: string): void {
    if (route === 'view') {
      this.router.navigate(['/view']);
    } else if (route === 'logout') {
      this.logout();
    } else if (route === 'about') {
    } else if (route === 'help') {
    }
    //setTimeout(() => {
    //  this.router.navigate([route]);
    // }, 1000); // Simulated delay of 1 second (remove this line in your actual code)
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
