import { Component, OnInit } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username = '';
  password = '';
  confirmPassword = '';

  constructor(
    public angularFireAuth: AngularFireAuth,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {}

  async register() {
    const {
      username,
      password,
      confirmPassword
    } = this;
    if (password !== confirmPassword) {
      this.showAlert('Error', `Passwords don't match`);
      return console.error(`Passwords don't match`);
    }

    try {
      const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password);
      console.log(result);

      this.showAlert('Success', `New account created`);
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.dir(error);
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
