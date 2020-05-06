import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(  email: string , password: string) {
return new Promise(
  ( Resolve , Reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      () => {
        Resolve();
      },
      (error) => {
        Reject(error);
      }
      );
    }
);
}
signInUser(email: string, password: string) {
  return new Promise((Resolve, Reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
() => {
  Resolve();
},
(error) => {
  Reject(error);
}
    );
  });
}

signOutUser() {
  firebase.auth().signOut();
}

}
