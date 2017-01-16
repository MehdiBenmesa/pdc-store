import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";
import { RechargeTicket } from "../../model/recharge-ticket";
import { Ticket } from "../../model/ticket";

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  private user:User;
  constructor(private userService:UserService) {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  private choice = 0;
  public onTicketClicked(){
    this.choice = 1;
    this.user.wallet.setRechargeStrategy(new RechargeTicket());

  }

  public rechargeTicket(number){
    var ticket = new Ticket(number);
    var amount = this.user.wallet.applyChargeCommit();
    this.userService.setWallet(this.user.wallet);
    this.userService.chargeWallet(this.user.id, amount);
    this.choice = 0;
  }

  public onBankClicked(){
    this.choice = 2;
  }

  ngOnInit() {
  }

}
