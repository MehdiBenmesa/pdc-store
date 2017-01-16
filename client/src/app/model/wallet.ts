import { Recharge } from "./recharge";
export class Wallet {
   constructor(private credit:number){}
   private rechargeStrategy : Recharge;
   public addCredit(amount :number){
     this.credit += amount;
   }
   public getCredit():number{
     return this.credit;
   }

   public setRechargeStrategy(strategy:Recharge){
     this.rechargeStrategy = strategy;
   }

   public applyChargeCommit():number{
     return this.rechargeStrategy.recharge(this);
   }
}
