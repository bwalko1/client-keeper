import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'ck-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  userSettings;
  username = '';

  constructor(
    public angularFirestore: AngularFirestore,
    public userService: UserService
  ) {
    const settings = angularFirestore.doc(`users/${userService.getUID()}`);
    this.userSettings = settings.valueChanges();
  }

  ngOnInit() {
    this.getUserData();
  }

  private getUserData() {
    this.username = this.userService.getUsername().toUpperCase();
  }
}
