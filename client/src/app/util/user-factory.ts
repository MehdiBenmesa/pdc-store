import { User } from "../model/user";
import { PremuimUser } from "../model/premuim-user";
import { Wallet } from "../model/wallet";
export class UserFactory {
  public static createUser(user):User{
    switch(user.type){
      case 'simple' : return new User(user._id, user.username, user.email, new Wallet(user.credit), user.products);
      case 'premuim' : return new PremuimUser(user._id, user.username, user.email, new Wallet(user.credit), user.products);
      default : return null;
    }
  }
}
