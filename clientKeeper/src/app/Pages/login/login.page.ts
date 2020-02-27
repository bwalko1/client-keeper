import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'ck-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public userService: UserService,
    public angularFirestore: AngularFirestore
  ) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.username, this.password);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
