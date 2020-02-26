import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { MaterialModule } from '../../Modules/material.module';
import { ShareModule } from '../../Modules/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MaterialModule,
    ShareModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
