import { Wallet } from "./wallet";
export class User {
  constructor(
    public id : string,
    public username : string,
    public email: number,
    public wallet: Wallet,
    public products: any
  ){}

  public getCredit():number{
    return this.wallet.getCredit();
  }
}
