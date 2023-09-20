import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
   private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
  
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

  login(username: string, password: string) {
    // Send a POST request to your JSON server to authenticate the user
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json'); // Set the required headers
    // Enable CORS for specific origins


    const body = { username, password }; // Your request data
    return this.http.get<any>(`${this.baseUrl}/users?username=${username}`);

    
  }
}
