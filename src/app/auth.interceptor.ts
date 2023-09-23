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

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authData = this.authService.getAuthData();
    // Check if the user is authenticated
    if (authData.accessToken) {
      // Add custom headers to the request
      request = request.clone({
        setHeaders: {
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
