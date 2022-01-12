import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanLoad {

  constructor(
    private tokenService: TokenService,
    private route: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLoged = this.tokenService.getIsLoged();
    console.log(isLoged);
    if(!isLoged) {
      this.route.navigate(['autenticacao', 'login']);
    }
    return isLoged;
  }
  
}
