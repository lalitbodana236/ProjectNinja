import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ConstantsService } from './constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjectNinja';

  constructor(
    private authService: AuthService,
    private router: Router,
    private constants: ConstantsService
  ) {
    this.getUserInfo();
  }
  // Get user information
  getUserInfo(): any {
    const userInfoStr: string | null = localStorage.getItem(
      this.constants.USER_IFO
    );
    const authInfoStr: string | null = localStorage.getItem(
      this.constants.TOKEN_KEY
    );
    if (userInfoStr != null && authInfoStr != null) {
      const authData = authInfoStr != null ? JSON.parse(authInfoStr) : null;
      this.authService.refreshToken(authData.refreshToken);
      this.authService.setAuthenticated(true);
      // Redirect the user to the desired route (e.g., dashboard)
      this.router.navigate(['/dashboard']);
      return JSON.parse(userInfoStr);
    } else {
      this.authService.setAuthenticated(false);
      // Redirect the user to the login page
      //this.router.navigate(['/login']);
    }
  }
}
