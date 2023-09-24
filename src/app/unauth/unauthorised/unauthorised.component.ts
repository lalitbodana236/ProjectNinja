import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.css']
})
export class UnauthorisedComponent {
 showRegistrationForm = false;

  toggleRegistrationForm() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }
}
