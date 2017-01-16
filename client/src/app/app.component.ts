import { Component } from '@angular/core';
import { User } from "./model/user";
import { UserService } from "./services/user.service";
import { UserFactory } from "./util/user-factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private user : User;
  private logedIn : boolean;
  constructor(private userService:UserService){
    this.logedIn = JSON.parse(localStorage.getItem('login'));
    if(this.logedIn == true){
      var userId = JSON.parse(localStorage.getItem('userId'));
      userService.getUserById(userId)
                 .subscribe(user => this.user = user,
                           error => console.log(error),
                           () => {
                                  userService.setUser(this.user);
                                  userService.setLoginStatus(true);

                          });
    }
  }
}
