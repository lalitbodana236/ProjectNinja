import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/constants.service';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.css'],
})
export class UnauthorisedComponent {
  constructor(private router: Router, private constants: ConstantsService) {}
  toggleRegistrationForm(value: string) {
    this.router.navigate([value]);
  }
}
