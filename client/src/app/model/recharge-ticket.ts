import { Wallet } from "./wallet";
import { Recharge } from "./recharge";
import { Ticket } from "./ticket";
export class RechargeTicket extends Recharge {
  private ticket:Ticket;
  public constructor(){
    super();
  }

  public setTicket(ticket:Ticket){
    this.ticket = ticket;
  }

  private verifyTicket():boolean{
    if(this.ticket.getNumber()>0)
      return true;
  }

  public recharge(wallet: Wallet):number{
    wallet.addCredit(1000);
    return 1000;
  }
}
