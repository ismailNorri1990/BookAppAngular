import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookAppAngular';

  constructor() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyCR4sEkyzePNsL_nS5OT9HAfOMMfmfb3ho',
    authDomain: 'bookappangular-ef8e2.firebaseapp.com',
    databaseURL: 'https://bookappangular-ef8e2.firebaseio.com',
    projectId: 'bookappangular-ef8e2',
    storageBucket: 'bookappangular-ef8e2.appspot.com',
    messagingSenderId: '580233673876',
    appId: '1:580233673876:web:761c33fa6dcf2b1fa34881',
    measurementId: 'G-XRD4XEM3KJ'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
