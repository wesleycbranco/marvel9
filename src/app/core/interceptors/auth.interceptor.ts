import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Token } from '../models/token';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token: Token = {privatekey: '', publickey: ''};

  constructor(private tokenService: TokenService) {
    tokenService.getToken().subscribe((token: Token) => this.token = token)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const ts = new  Date().valueOf().toString();
    const hash = Md5.hashStr(`${ts}${this.token.privatekey}${this.token.publickey}`);
    const req = request.clone({
      setParams: {
        apikey: this.token.publickey,
        hash: hash,
        ts 
      }
    })
    return next.handle(req);
  }
}
