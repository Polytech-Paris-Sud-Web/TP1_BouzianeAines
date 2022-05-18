import { Injectable } from '@angular/core';
import { Article, NewArticle } from 'src/app/model/Article';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private readonly http : HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public removeArticle(id: Number): Observable<Article> {
    return this.http.delete<Article>(`http://localhost:3000/articles/${id}`);
  }

  public newArticle(article: NewArticle): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles/', article);
  }
}

