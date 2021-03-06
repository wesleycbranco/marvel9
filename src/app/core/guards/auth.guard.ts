import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {

  constructor(
    private route: Router,
    private tokenService: TokenService,
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLoged = this.tokenService.getIsLoged();
    console.log(isLoged);
    if(isLoged) {
      this.route.navigate(['main']);
    }
    return !isLoged;
  }
  
}
