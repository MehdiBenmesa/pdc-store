import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private logedIn : boolean = false;
  private user : User;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  public isLogedIn(): boolean {
    return this.logedIn;
  }
	public onLogin(username:string, password:string):void{
    this.userService.login(username, password)
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
