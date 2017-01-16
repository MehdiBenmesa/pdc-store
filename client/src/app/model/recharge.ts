import { Wallet } from "./wallet";
export abstract class Recharge {
  public abstract recharge(wallet : Wallet):number;
}
