import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models';
import { ArticleService, UserService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html'
})
export class FavoriteButtonComponent implements OnInit {
  @Input() article: Article;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {}
  toggleFavorite() {
    this.isSubmitting = true;
    this.userService.isAuthenticated.subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigateByUrl('/login');
        return;
      }
      if (!this.article.favorited) {
        this.articleService.favorite(this.article.slug).subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(true);
          },
          err => (this.isSubmitting = false)
        );
      } else {
        this.articleService.unfavorite(this.article.slug).subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(false);
          },
          err => (this.isSubmitting = false)
        );
      }
    });
  }
}
