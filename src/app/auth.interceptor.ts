import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
private readonly TOKEN_KEY = 'auth_token';
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    

    const authInfo: string | null = localStorage.getItem(this.TOKEN_KEY)
    const authData = authInfo != null ? JSON.parse(authInfo) : this.authService.getAuthData();
    // Check if the user is authenticated
    if (authData.accessToken) {
      // Add custom headers to the request
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `${authData.tokenType} ${authData.accessToken}`,
          'expiryDuration': authData.expiryDuration.toString(),
          'refreshToken': authData.refreshToken,
          // Add other headers if needed
        },
      });
    }

    return next.handle(request);
  }
}
