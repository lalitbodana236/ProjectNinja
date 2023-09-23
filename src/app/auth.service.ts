import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  
  private serverUrl = 'http://localhost:9193/api/auth';

  constructor(private http: HttpClient) { }
  
   private authData: AuthData = {
    accessToken: '',
    expiryDuration: 0,
    refreshToken: '',
    tokenType: '',
  };

  private isAuthenticatedValue: boolean = false; // Use a different name for the property

  // Method to set the authentication status
  setAuthenticated(status: boolean) {
    this.isAuthenticatedValue = status;
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  // Other authentication-related methods

  // Other authentication-related methods

  login(username: string, password: string): Observable<any> {
    // Prepare the request body
    const requestBody = {
      email: username,
      password: password,
      //deviceInfo: deviceInfo,
      deviceInfo: {
         deviceId: 'D1',
      deviceType: 'DEVICE_TYPE_ANDROID',
      notificationToken: 'N1',
      }
    };

    // Set the HTTP headers if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    // Make a POST request to your authentication endpoint
    return this.http.post(this.serverUrl + '/login', requestBody, { headers }).pipe(
      // Handle the API response
      map((response: any) => {
        // Assuming your API response contains the necessary authentication details
        this.authData.accessToken = response.accessToken;
        this.authData.expiryDuration = response.expiryDuration;
        this.authData.refreshToken = response.refreshToken;
        this.authData.tokenType = response.tokenType;

        return response; // You can return the response if needed
      })
    );
  }

  getAuthData(): AuthData {
    return this.authData;
  }
}

interface AuthData {
  accessToken: string;
  expiryDuration: number;
  refreshToken: string;
  tokenType: string;
}