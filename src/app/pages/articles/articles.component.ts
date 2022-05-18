import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

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

  removeFromBDD(article : Article){
    this.articleService.removeArticle(article.id).subscribe({next: () => this.articleService.getArticles().subscribe({next: (data) => this.articles = data})});
  }  

}
