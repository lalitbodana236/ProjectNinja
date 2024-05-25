import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ConstantsService } from 'src/app/constants.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private constants: ConstantsService
  ) {}

  redirectToNewScreen() {
    // Navigate to the Add Article page
    this.router.navigate(['add-article']);
  }
}
