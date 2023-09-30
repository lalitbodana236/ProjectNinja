import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  formData = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    mobile: '',
    password: '',
  };

  constructor(private authService: AuthService) {} // Inject the AuthService

  onSubmit() {
    // Call the AuthService's registerUser method to send registration data
    this.authService.registerUser(this.formData).subscribe(
      (response) => {
        // Handle successful registration response
        console.log('Registration successful:', response);
        // Redirect or perform other actions as needed
      },
      (error) => {
        // Handle registration error
        console.error('Registration error:', error);
        // Display an error message or perform other error-handling actions
      }
    );
  }
}
