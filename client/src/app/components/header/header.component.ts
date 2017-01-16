import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private login:boolean = false;
  private signup:boolean = false;
  private loginStatus:boolean = false;
  private credit:number;
  private recharge:boolean = false;
  constructor(private userService: UserService) {
    this.userService.getLoginStatus()
    .subscribe(
      status => this.loginStatus = status,
      error => console.log(error)
    )
    this.userService.getWallet().subscribe(
      wallet => this.credit = wallet.getCredit()
    )
  }

  public onDisconnect() : void{
    this.userService.setLoginStatus(false);
    localStorage.setItem('userId', JSON.stringify(0));
    localStorage.setItem('login', JSON.stringify(false));
  }


  public isSignupClicked():boolean{
    return this.signup;
  }

  public isRechargeClicked():boolean{
    return this.recharge;
  }

  public isLoginClicked():boolean{
    return this.login;
  }

  public getLoginStatus():boolean{
    return this.loginStatus;
  }

  public onSignupClicked():void{
    this.signup = ! this.signup;
  }

  public onLoginClicked():void{
    this.login = ! this.login;
  }

  public onRechargeClicked():void{
    this.recharge = ! this.recharge;
  }

  ngOnInit() {
  }

}
