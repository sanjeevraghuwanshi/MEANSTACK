import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-helpers',
  templateUrl: './article-helpers.component.html'
})
export class ArticleHelpersComponent {
  @Input() article: Article;
}
