import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleService } from './services/article/article.service';
import { AuthorService } from './services/author/author.service';
import { ArticleCreationComponent } from './pages/article-creation/article-creation.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticlesTopComponent } from './pages/articles-top/articles-top.component';

import { SearchArticlePipe } from './pipes/searchArticle/search-article.pipe';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailsComponent},
  { path: 'articles/top10', component: ArticlesTopComponent},
  { path: '', component: ArticlesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleDetailsComponent,
    ArticlesTopComponent,
    SearchArticlePipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    [ArticleService], 
    [AuthorService],
    [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
