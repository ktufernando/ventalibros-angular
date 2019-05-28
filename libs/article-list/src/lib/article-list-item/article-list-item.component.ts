import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ArticleData, User } from '@angular-ngrx-nx-realworld-example-app/api';
import { Observable } from 'rxjs';
import { AuthFacade } from '@angular-ngrx-nx-realworld-example-app/auth';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: ArticleData;
  @Output() favorite: EventEmitter<string> = new EventEmitter();
  @Output() unFavorite: EventEmitter<string> = new EventEmitter();
  @Output() navigateToArticle: EventEmitter<string> = new EventEmitter();
  user$: Observable<User>;

  constructor(
    private auhtFacade: AuthFacade,
  ) {}

  ngOnInit() {
    this.user$ = this.auhtFacade.user$;
  }
  


  toggleFavorite(article: ArticleData) {
    if (article.favorited) {
      this.unFavorite.emit(article.slug);
    } else {
      this.favorite.emit(article.slug);
    }
  }
}
