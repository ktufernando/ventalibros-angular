import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success/success.component';
import { MercadopagoService } from './mercadopago.service';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '@angular-ngrx-nx-realworld-example-app/auth';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SuccessComponent, canActivate: [AuthGuardService] }
    ]),
  ],
  providers: [MercadopagoService],
  declarations: [SuccessComponent]
})

export class MercadopagoModule {}
