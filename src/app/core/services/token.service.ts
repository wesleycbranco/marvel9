import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenSubject$: BehaviorSubject<Token> = new BehaviorSubject<Token>({ privatekey: '', publickey: ''});
  private isLoged: boolean = false;

  constructor() {
    this.tokenSubject$.next(this.getTokenFromStorage());
    if(this.getTokenFromStorage().privatekey !== '') {
      this.isLoged = true;
    }
  }

  private setTokenFromStorage(token: Token):void {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  private getTokenFromStorage(): Token {
    const tokenStorage = sessionStorage.getItem('token'); 
    return tokenStorage !== null ? JSON.parse(tokenStorage) : { privatekey: '', publickey: ''};
  }

  setToken(token: Token) {
    this.isLoged = true;
    this.setTokenFromStorage(token);
    this.tokenSubject$.next(token);
  }

  getToken():Observable<Token> {
    return this.tokenSubject$;
  }

  getIsLoged(): boolean {
    return this.isLoged;
  }

  clearToken(): void {
    this.tokenSubject$.next({ privatekey: '', publickey: ''})
    this.isLoged = false;
    sessionStorage.clear();
  }
}
