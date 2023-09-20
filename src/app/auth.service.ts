import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // Send a POST request to your JSON server to authenticate the user
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', 'http://localhost:3000').set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE').set('Access-Control-Allow-Headers', 'Content-Type, Authorization');; // Set the required headers
    // Enable CORS for specific origins


    const body = { username, password }; // Your request data
    return this.http.post<any>(`${this.apiUrl}?username=${username}&password=${password}`, {headers});
  }
}
