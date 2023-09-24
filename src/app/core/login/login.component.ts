import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login here
        console.log('Login successful', response);
        const userInfo = response; // Replace with actual user info
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.login();
      },
      (error) => {
        // Handle login error here
        console.error('Login failed', error);
      }
    );
  }

  // Assuming this is within your LoginComponent
  login() {
    // After successful authentication, set isAuthenticated to true
    this.authService.setAuthenticated(true);
    // Redirect the user to the desired route (e.g., dashboard)
    this.router.navigate(['/dashboard']);
  }

  // Assuming this is within your LogoutComponent
  logout() {
    // After logging out, set isAuthenticated to false
    this.authService.setAuthenticated(false);
    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }

  resetPassword() {
    // Implement your reset password logic here
    // You can navigate to the reset password page
    this.router.navigate(['/forgot']); // Replace '/reset-password' with your reset password route
  }
}
