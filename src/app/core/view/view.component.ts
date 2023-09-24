import { Component } from '@angular/core';
import { BrowserInfoService } from 'src/app/browser-info.service';
import { ConstantsService } from 'src/app/constants.service';
import { UserInfo } from 'src/app/interface/UserInfo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  public userInfo: UserInfo = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    mobile: '',
  };
  constructor(
    private browserInfoService: BrowserInfoService,
    private constants: ConstantsService
  ) {}
  displayProfile = false;
  displayChangePassword = false;

  ngOnInit(): void {
    this.displayProfile = true;
    const userInfoStr: string | null = localStorage.getItem(
      this.constants.USER_IFO
    );
    if (userInfoStr != null) {
      this.userInfo = JSON.parse(userInfoStr);
    }
  }

  // Create a function to populate user information
  populateUserDetails() {
    // Replace the example values with actual user data (you can fetch it from your backend or any other source)
    // Show profile details form
    this.displayProfile = true;

    // Hide change password form
    this.displayChangePassword = false;
  }

  showChangePasswordForm() {
    // Show change password form
    this.displayChangePassword = true;

    // Hide profile details form
    this.displayProfile = false;
  }

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  changePassword() {
    // Implement password change logic here
    // You can access the currentPassword, newPassword, and confirmPassword values here
    // Check if newPassword and confirmPassword match, and perform the password change action
  }
}
