import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article/article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
})
export class ArticleCreationComponent implements OnInit {
  articleForm : FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router : Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  createArticle(){
    const newArticle = {
      title : this.articleForm.value.title,
      content : this.articleForm.value.content,
      author : this.articleForm.value.authors,
      date : new Date()
    };

    this.articleService.newArticle(newArticle).subscribe(() => this.router.navigateByUrl('/'));
  }
  
}
