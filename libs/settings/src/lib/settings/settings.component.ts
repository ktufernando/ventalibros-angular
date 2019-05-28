import { AuthFacade } from '@angular-ngrx-nx-realworld-example-app/auth';
import { Field, NgrxFormsFacade } from '@angular-ngrx-nx-realworld-example-app/ngrx-forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EditSettings } from '../+state/settings.actions';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'image',
    placeholder: 'URL de tu imagen de perfil',
    validator: []
  },
  {
    type: 'INPUT',
    name: 'username',
    placeholder: 'Tú nombre de usuario',
    validator: [Validators.required]
  },
  {
    type: 'TEXTAREA',
    name: 'bio',
    placeholder: 'Corta biografía sobre vos',
    validator: []
  },
  {
    type: 'INPUT',
    name: 'email',
    placeholder: 'Email',
    validator: [Validators.required]
  },
  {
    type: 'INPUT',
    name: 'password',
    placeholder: 'Nueva contraseña',
    validator: [Validators.required],
    attrs: {
      type: 'password'
    }
  }
];

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private authFacade: AuthFacade,
    private ngrxFormsFacade: NgrxFormsFacade
  ) {}

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.authFacade.user$.subscribe(user => this.ngrxFormsFacade.setData(user));
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    this.store.dispatch(new EditSettings());
  }

  logout() {
    this.authFacade.logout();
  }
}
