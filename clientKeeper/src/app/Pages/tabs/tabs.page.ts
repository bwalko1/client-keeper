import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ck-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage implements OnInit, AfterViewInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  constructor(public userService: UserService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.tabs.select('setup');
  }

  logout() {
    this.userService.logout();
  }
}
