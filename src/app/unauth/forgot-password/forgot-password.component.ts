import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  forgotPassword() {
    this.authService.forgotPassword(this.email).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Password reset failed:', error);
      }
    );
  }
}
