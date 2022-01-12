import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url:string = environment.url

  constructor(private http: HttpClient) { }

  getAllCharacters(orderBy: string = 'name', offset: number = 0) {
    return this.http.get(`${this.url}characters?orderBy=${orderBy}&offset=${offset}`)
  }
}
