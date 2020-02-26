import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

interface User {
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(public angularFireAuth: AngularFireAuth) {}

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

  async isAuthenticated() {
    if (this.user) return true;

    // const user = await this.angularFireAuth.authState.pipe(first()).toPromise();
    // if (user) {
    //   this.setUser({
    //     username: user.email.split('@')[0],
    //     uid: user.uid
    //   });

    //   return true;
    // }

    return false;
  }
}
