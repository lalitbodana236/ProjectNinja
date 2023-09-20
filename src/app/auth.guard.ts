import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router   } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
constructor(private router: Router,private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Your authentication logic goes here
    const isAuthenticated = this.checkIfUserIsAuthenticated();

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
  // Example authentication logic (replace with your actual logic)
  private checkIfUserIsAuthenticated(): boolean {
    // Implement your authentication logic here
    // For example, check if the user is logged in
    const isLoggedIn = /* Add your authentication check logic here */ true;
    return isLoggedIn;
  }
}
