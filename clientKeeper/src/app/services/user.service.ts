import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(
    public angularFireAuth: AngularFireAuth,
    public angularFirestore: AngularFirestore,
    public router: Router,
    public alertService: AlertService
  ) {}

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  getUsername() {
    return this.user.username;
  }

  getUID() {
    return this.user.uid;
  }

  async login(username: string, password: string) {
    try {
      const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(
        username + '@gmail.com',
        password
      );

      if (result.user) {
        this.angularFirestore.doc(`users/${result.user.uid}`).set({
          username
        });

        this.setUser({
          username,
          uid: result.user.uid
        });

        this.router.navigate(['/tabs']);
      }
    } catch (error) {
      console.dir(error);
      if (error.code === 'auth/user-not-found') {
        console.log('User not found');
        this.alertService.showAlert('Error', 'User not found');
      }

      this.alertService.showAlert('Error', error.message);
    }
  }

  async logout() {
    try {
      await this.angularFireAuth.auth.signOut().then(() => {
        this.router.navigate(['/login']);
      });
    } catch (error) {
      this.alertService.showAlert('Error', error.message);
    }
  }

  async isAuthenticated() {
    if (this.user) {
      return true;
    }

    const user = await this.angularFireAuth.authState.pipe(first()).toPromise();
    if (user) {
      this.setUser({
        username: user.email.split('@')[0],
        uid: user.uid
      });

      return true;
    }

    return false;
  }
}
