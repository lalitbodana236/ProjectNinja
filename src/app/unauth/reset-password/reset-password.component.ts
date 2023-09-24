import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  token: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve query parameters from the URL
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
      this.email = params['email'];
    });
  }

  resetPassword() {
    // Add your password reset logic here
    if (this.password !== this.confirmPassword) {
      // Handle password mismatch error
      console.error('Passwords do not match.');
    } else {
      // Perform the password reset action (e.g., call a service method)
      // You can send the email and new password to the backend for processing
      console.log('Resetting password...');
      console.log('Email:', this.email);
      console.log('New Password:', this.password);
      this.authService
        .resetPassword(
          this.email,
          this.password,
          this.confirmPassword,
          this.token
        )
        .subscribe(
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
}
