import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) {}

  download(slug: string) {
    return  this.http.get(`${environment.api_url}/file/${slug}`, { responseType: 'blob'});
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/epub+zip',
      'Accept': 'application/epub+zip'
    };

    return new HttpHeaders(headersConfig);
  }

}
