import { Component, OnInit, Pipe } from '@angular/core';
import { User } from '@angular-ngrx-nx-realworld-example-app/api';
import { Router } from '@angular/router';
import { MercadopagoService } from '../mercadopago.service';
import { AuthFacade } from '@angular-ngrx-nx-realworld-example-app/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'angular-ngrx-nx-realworld-example-app-mp-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router,
    private mpService: MercadopagoService,
    private authFacade: AuthFacade) {
  }

  ngOnInit() {
    this.authFacade.user$.subscribe( u => { 
      if(u && u.username){
        let queryParams = this.router.parseUrl(this.router.url).queryParams;
        this.mpService.paymentCallback(queryParams).subscribe(r => {
          this.router.navigate(['/profile', u.username]);
        });
      }
    } );
    
  }

}
