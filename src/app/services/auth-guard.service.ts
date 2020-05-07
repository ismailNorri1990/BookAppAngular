import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(
      (Resolve, Reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              Resolve(true);
            } else {
              this.router.navigate(['/auth', 'signin']);
              Resolve(false);
            }
          }
        );
      }
    );
  }
}
