import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { AuthorService } from '../../services/author/author.service';
import { AuthorBio } from 'src/app/model/Author';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
})
export class ArticleDetailsComponent implements OnInit {

  @Input() article?: Article;
  author? : AuthorBio;

  private routeSub: Subscription;

  constructor(private articleService: ArticleService, private authorService: AuthorService,
    private router : Router, private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      articleService.getArticleById(params['id']).subscribe({next: (data) => this.article = data});
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getAuthorBio() : string {
    return this.author!.content;
  }



  goBack() : void {
    this.router.navigateByUrl('/');
  }

  loadBio(): void {
    this.authorService.getAuthorByName(this.article?.author!).subscribe({next: (author) => this.author = author});
  }

 
}
