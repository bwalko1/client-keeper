import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ck-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss']
})
export class SetupPage implements OnInit {
  setting = false;

  constructor(
    public angularFirestore: AngularFirestore,
    public userService: UserService
  ) {}

  ngOnInit() {}

  saveSettings() {
    const setting = this.setting;

    this.angularFirestore.doc(`users/${this.userService.getUID()}`).update({
      settings: { setting: setting }
    });
  }
}
