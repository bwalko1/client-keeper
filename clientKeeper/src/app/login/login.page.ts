import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';

  constructor(public angularFireAuth: AngularFireAuth) { }

  ngOnInit() { }

  async login() {
    const { username, password } = this;
    try {
      const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);
      console.log(result);
    } catch (error) {
      console.dir(error);
      if (error.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }
}
