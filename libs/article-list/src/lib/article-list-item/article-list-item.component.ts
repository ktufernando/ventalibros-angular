import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ArticleData } from '@angular-ngrx-nx-realworld-example-app/api';
import { Observable } from 'rxjs';
import { AuthFacade } from '@angular-ngrx-nx-realworld-example-app/auth';
import { DownloadService } from './download.service';

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
  purchased: Boolean;

  constructor(
    private authFacade: AuthFacade,
    private downloadService: DownloadService
  ) {}

  ngOnInit() {
    this.authFacade.user$.subscribe(user => {
      this.purchased = user.purchases.includes(this.article.id);
    });    
  }

  download(slug: string){
    this.downloadService.download(slug).subscribe(res => {
      //window.open(window.URL.createObjectURL(res));

      const data = window.URL.createObjectURL(res);
      var link = document.createElement('a');
      link.href = data;
      link.download=this.article.title;
      link.click();
      setTimeout(() => window.URL.revokeObjectURL(data), 100);
    });
  }
  


  toggleFavorite(article: ArticleData) {
    if (article.favorited) {
      this.unFavorite.emit(article.slug);
    } else {
      this.favorite.emit(article.slug);
    }
  }
}
