import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action, State, StateContext } from '@ngxs/store';
import { IAccount } from '../../interfaces/account.interface';
import { LoginGQL } from '../../services/login.gql';
import { GetAuthorized, Login, Logout } from '../actions/authentication.action';
import { catchError, map } from 'rxjs/operators';

@State<IAccount>({
  name: 'ConnectedUser',
})
@Injectable()
export class AuthenticationState {
  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private loginGQL: LoginGQL
  ) {}

  @Action(Login)
  login(ctx: StateContext<IAccount>, action: { username: String, password: String }) {
    const state = ctx.getState();

    this.loginGQL.mutate(action).pipe(
      map((result) => {
        localStorage.setItem(
          'token',
          JSON.stringify(result.data?.token)
        );

        this.router.navigate([
          this.route.snapshot.queryParams['returnUrl'] || '/',
        ]);

        if (state && result.data?.account) {
          ctx.setState(result.data.account);
        }
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<IAccount>) {
    localStorage.removeItem('token');
    ctx.setState(<IAccount>{});

    this.router.navigate(['/login']);
  }
}