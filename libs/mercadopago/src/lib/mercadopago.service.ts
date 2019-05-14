import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@angular-ngrx-nx-realworld-example-app/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  constructor(private apiService: ApiService) {}

  getPaymentLink(slug: string): Observable<string> {
    return this.apiService.post('/mp/payment', {slug: slug}).pipe(map((data: any) => data.point));
  }

  paymentCallback(mp: Object): Observable<string> {
    return this.apiService.post('/mp/payment/callback', mp).pipe(map((data: any) => data));
  }
}
