import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router, public userService: UserService) {}

  async canActivate(route){
    if (await this.userService.isAuthenticated()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
