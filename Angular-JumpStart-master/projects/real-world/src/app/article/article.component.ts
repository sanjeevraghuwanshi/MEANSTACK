import { Component, OnInit } from '@angular/core';
import { Article, User, Comment, UserService, ArticleService } from '../shared';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../shared/services/comment.service';

@Component({
  selector: 'app-article-pages',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  articlce: Article;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormError = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private articleService: ArticleService,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit() {}
}
