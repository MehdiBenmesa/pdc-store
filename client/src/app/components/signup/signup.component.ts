import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private user : User;
  private logedIn: boolean;
  constructor(private userService : UserService) { }

  ngOnInit() {

  }

  public onSignup(username, email, password, repassword, type): void {
    if(password == repassword){
      this.userService.signup(username, email, password, type)
      .subscribe(
        user => this.user = user,
        error => console.log(error),
        () => {
            this.logedIn = true;
            this.userService.setLoginStatus(true);
            localStorage.setItem('login', JSON.stringify(true));
            localStorage.setItem('userId', JSON.stringify(this.user.id));
            location.reload();
        }
      );
    }
  }

}
