import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthorBio } from '../../model/Author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private readonly http : HttpClient) { }

  public getAuthorByName(name: string): Observable<AuthorBio> {
    return this.http.get<AuthorBio>(`http://localhost:3000/authors/${name}`);
  }

  public getAuthors(): Observable<AuthorBio[]> {
    return this.http.get<AuthorBio[]>("http://localhost:3000/authors");
  }
}
