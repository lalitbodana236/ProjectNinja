import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  constructor(private authService: AuthService, private router: Router) {}
  redirectToNewScreen() {
    // Navigate to a new screen (replace 'new-screen-url' with the actual route)
    this.router.navigate(['/add-article']);
  }
}
