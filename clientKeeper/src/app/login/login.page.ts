import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(
    public angularFireAuth: AngularFireAuth,
    public alertController: AlertController,
    public router: Router,
    public userService: UserService,
    public angularFirestore: AngularFirestore
  ) {}

  ngOnInit() {}

  async login() {
    const { username, password } = this;
    try {
      const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(
        username + '@gmail.com',
        password
      );

      if (result.user) {
        this.angularFirestore.doc(`users/${result.user.uid}`).set({
          username
        });

        this.userService.setUser({
          username: username,
          uid: result.user.uid
        });

        this.router.navigate(['/tabs']);
      }
    } catch (error) {
      console.dir(error);
      if (error.code === 'auth/user-not-found') {
        console.log('User not found');
        this.showAlert('Error', 'User not found');
      }

      this.showAlert('Error', error.message);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
