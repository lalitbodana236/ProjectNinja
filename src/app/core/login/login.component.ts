import { Component } from '@angular/core';
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login here
        console.log('Login successful', response);
      },
      (error) => {
        // Handle login error here
        console.error('Login failed', error);
      }
    );
  }
}
