import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanLoad, CanActivate {

  constructor(
    private tokenService: TokenService,
    private route: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     const isLoged = this.tokenService.getIsLoged();
    if(!isLoged) {
      this.route.navigate(['autenticacao', 'login']);
    } else {
      this.route.navigate(['main']);
    }
    return isLoged;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLoged = this.tokenService.getIsLoged();
    if(!isLoged) {
      this.route.navigate(['autenticacao', 'login']);
    }
    return isLoged;
  }
  
}
