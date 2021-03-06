import { GlobalVariables } from 'src/shared/variables';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(localStorage.getItem(GlobalVariables.__TOKEN__) && this.router.url == '/')
        {
          this.router.navigateByUrl('dashboard');
          return false;
        };
      return true;
  }
}
