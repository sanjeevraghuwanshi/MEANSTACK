import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Article } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleService {
  constructor(private apiService: ApiService) {}
  get(slug): Observable<Article> {
    return this.apiService.get('/articles/' + slug).pipe(map(data => data.article));
  }
  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }
  save(article: Article): Observable<Article> {
    if (article.slug) {
      return this.apiService
        .put('/articles/' + article.slug, { article: article })
        .pipe(map(data => data.article));
    } else {
      return this.apiService
        .post('/articles/', { article: article })
        .pipe(map(data => data.article));
    }
  }
  favorite(slug): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }
}
