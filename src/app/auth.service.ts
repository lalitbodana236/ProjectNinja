import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BrowserInfoService } from 'src/app/browser-info.service';
import { ConstantsService } from './constants.service';
import { UserInfo } from 'src/app/interface/UserInfo';
import { AuthData } from './interface/AuthData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private serverUrl = 'http://localhost:9193/api/auth';
  private serverUrlSecure = 'http://localhost:9193/api/v1/demo-controller';
  browserInfo: { Browser: string; OS: string } = {
    Browser: '',
    OS: '',
  };
  constructor(
    private http: HttpClient,
    private browserInfoService: BrowserInfoService,
    private constants: ConstantsService
  ) {}

  private authData: AuthData = {
    accessToken: '',
    expiryDuration: 0,
    refreshToken: '',
    tokenType: '',
  };

  private userInfo: UserInfo = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    mobile: '',
  };

  private isAuthenticatedUser: boolean = false; // Use a different name for the property
  //private userInfo: any = {};  // Initialize an empty object for user info

  // Method to set the authentication status
  setAuthenticated(status: boolean) {
    this.isAuthenticatedUser = status;
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }

  // Other authentication-related methods

  // Other authentication-related methods

  login(username: string, password: string): Observable<any> {
    this.browserInfo = this.browserInfoService.getBrowserInfo();
    // Prepare the request body
    const requestBody = {
      email: username,
      password: password,
      //deviceInfo: deviceInfo,
      deviceInfo: {
        deviceId: 'D1',
        deviceType: this.browserInfo.OS,
        notificationToken: 'N1',
      },
    };

    // Set the HTTP headers if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    // Make a POST request to your authentication endpoint
    return this.http
      .post(this.serverUrl + '/login', requestBody, { headers })
      .pipe(
        // Handle the API response
        map((response: any) => {
          // Assuming your API response contains the necessary authentication details
          this.authData.accessToken = response.accessToken;
          this.authData.expiryDuration = response.expiryDuration;
          this.authData.refreshToken = response.refreshToken;
          this.authData.tokenType = response.tokenType;
          this.userInfo = response.userInfo;
          localStorage.setItem(
            this.constants.USER_IFO,
            JSON.stringify(this.userInfo)
          );
          localStorage.setItem(
            this.constants.TOKEN_KEY,
            JSON.stringify(this.authData)
          );
          return response; // You can return the response if needed
        })
      );
  }

  getAuthData(): AuthData {
    return this.authData;
  }

  // Logout the user
  logout(): void {
    // Clear user information and set isAuthenticated to false
    this.isAuthenticatedUser = false;
    // this.userInfo = null; // Clear user info object
    localStorage.removeItem(this.constants.USER_IFO);
    localStorage.removeItem(this.constants.TOKEN_KEY);
    sessionStorage.removeItem(this.constants.USER_IFO);
  }

  registerUser(userData: any): Observable<any> {
    const requestBody = {
      email: userData.email,
      password: userData.password,
    };

    // Set the HTTP headers if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });
    return this.http.post(this.serverUrl + '/register', requestBody, {
      headers,
    });
  }

  getAllUsers(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer your-access-token',
      Expiryduration: '86400000',
      Refreshtoken: 'your-refresh-token',
    });
    return this.http.get<any[]>(`${this.serverUrlSecure}/user`, { headers });
  }

  refreshToken(refreshToken: string): Observable<any> {
    const requestBody = {
      refreshToken: refreshToken,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http
      .post(this.serverUrl + '/refresh', requestBody, { headers })
      .pipe(
        map((response: any) => {
          // Assuming your API response contains the necessary authentication details
          this.authData.accessToken = response.accessToken;
          this.authData.expiryDuration = response.expiryDuration;
          this.authData.refreshToken = response.refreshToken;
          this.authData.tokenType = response.tokenType;
          this.userInfo = response.userInfo;
          localStorage.setItem(
            this.constants.USER_IFO,
            JSON.stringify(this.userInfo)
          );
          localStorage.setItem(
            this.constants.TOKEN_KEY,
            JSON.stringify(this.authData)
          );
          return response; // You can return the response if needed
        })
      );
  }
}
