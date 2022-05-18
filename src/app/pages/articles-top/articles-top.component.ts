import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-articles-top',
  templateUrl: './articles-top.component.html',
  styleUrls: ['./articles-top.component.css']
})
export class ArticlesTopComponent implements OnInit {

  articles: Article[] = [];
  query: string;

  constructor(private articleService: ArticleService) {     
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles
    })
    this.query = "";
  }

  ngOnInit(): void {
  }

  get sortData() {
    return this.articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
  }
}
