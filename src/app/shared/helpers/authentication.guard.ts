// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   currentUser: IConnectedInformations;

//   constructor(private store: Store<MaderaStore>, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     this.currentUser = JSON.parse(localStorage.getItem('connectedEmployee'));
//     this.store.dispatch(AuthenticationAction.getAuthorized({}));
//     if (this.currentUser) {
//       return true;
//     }

//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
// }