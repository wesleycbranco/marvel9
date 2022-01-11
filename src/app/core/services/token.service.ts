import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenSubject$: BehaviorSubject<Token> = new BehaviorSubject<Token>({ privatekey: '', publickey: ''});

  constructor() {
    this.tokenSubject$.next(this.getTokenFromStorage());
  }

  private setTokenFromStorage(token: Token):void {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  private getTokenFromStorage(): Token {
    const tokenStorage = sessionStorage.getItem('token'); 
    return tokenStorage !== null ? JSON.parse(tokenStorage) : { privatekey: '', publickey: ''};
  }

  setToken(token: Token) {
    this.setTokenFromStorage(token);
    this.tokenSubject$.next(token);
  }

  getToken():Observable<Token> {
    return this.tokenSubject$;
  }
}
